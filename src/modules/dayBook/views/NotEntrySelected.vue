<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">There is no anything selected</h1>
    </div>

    <Fab
        @on:click="createEntry"
     />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        /* eslint-disable */
        // eslint-disable-next-line
        Fab: defineAsyncComponent( () => import ('../Components/FloatingAcBtn.vue') ) 

    },
    methods:{
        createEntry(){
            this.$router.push({name:'entry', params:{id:'new'}})
            console.log("new entry");
        }
    }
}
</script>

<style lang="scss" scoped>
    div {
        height: 100%;
    }

</style>