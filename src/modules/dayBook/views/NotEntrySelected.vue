<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">There is no anything selected</h1>
    </div>

    <Fab />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components:{
        /* eslint-disable */
        // eslint-disable-next-line
        Fab: defineAsyncComponent( () => import ('../Components/FloatingAcBtn.vue') ) 

    }
}
</script>

<style lang="scss" scoped>
    div {
        height: 100%;
    }

</style>