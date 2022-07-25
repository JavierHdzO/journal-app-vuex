<template>
  <template v-if="entry">
  <div class="etry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold"> {{ day }} </span>
      <span class="mx-1 fs-3">{{ month }}</span>
      <span class="mx-2 fs-2 fw-light">{{ yearDay }}</span>
    </div>
    <div>
      <input type="file" 
        @change="onSelectedImage"
        ref='imageInput'
        v-show="false"
        accept="image/png, image/jpeg, image/jpg"
      >
      <button 
        v-if="id !== 'new'"
        @click="onDeleteEntry"
        class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button
        @click="onSelectImage"
      >
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />
  <div 
    class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happend today?" v-model="entry.text"></textarea>
  </div>

  <img
    v-if="entry.picture && !localImage"
    :src="entry.picture"
    class="img-thumbnail"
  />
  


   <img
    v-if="localImage"
    :src="localImage"
    alt="Entry Picture"
    class="img-thumbnail"
  />
  
  </template>

  <Fab 
    icon="fa-save" 
    @on:click="saveEntry"
    />

</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import Swal from 'sweetalert2'

import getDayMonthYear from "./../helpers/getDayMonthYear";
import uploadImage from '../helpers/uploadImage'

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../Components/FloatingAcBtn.vue")),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntriesById"]),
    day() {
      return getDayMonthYear(this.entry.date).day;
    },
    month() {
      return getDayMonthYear(this.entry.date).month;
    },
    yearDay() {
      return getDayMonthYear(this.entry.date).yearDay;
    },
  },
  methods: {

    /** mapActions section */
    ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),

    /** methods section */
    loadEntry() {
      let entry;
      if( this.id === 'new' ){
          entry = {
            text:'',
            date: new Date().getTime()
          }
        
        }else{
        entry = this.getEntriesById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }


      this.entry = entry;
    },

    async saveEntry(){

      new Swal({
        title:' Waiting ...',
        allowOutsideClick: false
      })

      Swal.showLoading()


      const picture = await uploadImage(this.file)

      

      this.entry.picture = picture

      if( this.entry.id ) {
        //this update
        await this.updateEntry( this.entry )
      }else{
        //this create new entry
        this.entry.id  = await this.createEntry( this.entry )

        this.$router.push({name:'entry', params:{id:this.entry.id}})
      }

      Swal.fire('Saved', 'Entry registered successfully','success')

      this.file = null


    },

    async onDeleteEntry(){
      
      const { isConfirmed  } = await Swal.fire({
        title:'Are you sure?',
        text: 'Once deleting will not recovery',
        showDenyButton: true,
        confirmButtonText:"Yes, I'm sure"
      })
      
      if( isConfirmed ){
        new Swal({
          title: 'Waiting ...',
          allowOutsideClick: false
        })
        
        Swal.showLoading()

        await this.deleteEntry(this.id)
        this.$router.push( { name:'no-entry'} )

        Swal.fire('Eliminado','','success')
      }

    },

    onSelectedImage( event ){
      const file = event.target.files[0]

      if( !file ) {
        /** return if file is empty */
        this.file = null
        this.localImage = null
        return
        } 

      this.file = file
      const fr =  new FileReader()
      fr.onload = () => this.localImage = fr.result
      fr.readAsDataURL( file )



    },

    onSelectImage(){
      this.$refs.imageInput.click()

    }
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.localImage = null
      this.loadEntry();
    },
  },
};
</script>



<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
  resize: unset;

  &:focus {
    outline: none;
  }
}

img {
  bottom: 120px;
  position: fixed;
  right: 20px;
  width: 200px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>