<template>
    <NavBar />

    <div class="d-flex">
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




export default {
    name: 'Daybook-Layout',
    components:{
        NavBar: defineAsyncComponent( () => import('@/modules/dayBook/Components/NavBar.vue')),
        EntryList: defineAsyncComponent(  () => import ('@/modules/dayBook/Components/EntryList.vue'))
        
    }
}


</script>
