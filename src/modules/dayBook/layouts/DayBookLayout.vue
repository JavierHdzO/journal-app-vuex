<template>
    <NavBar />

    <div
        v-if="getIsLoading" 
        class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-">
            Waiting for a minute ...
            <h3 class="mt-2">
                <i class="fa fa-spin fa-sync"></i>
            </h3>
        </div>
    </div>

    <div 
        v-else
        class="d-flex">
        <div class="col-4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Daybook-Layout',
    components:{
        NavBar: defineAsyncComponent( () => import('@/modules/dayBook/Components/NavBar.vue')),
        EntryList: defineAsyncComponent(  () => import ('@/modules/dayBook/Components/EntryList.vue'))
        
    },
    computed:{
        ...mapGetters('journal', ['getIsLoading'])
    },
    methods:{
        ...mapActions('journal', ['loadEntries'])
    },
    created(){
        this.loadEntries()
    }
}


</script>
