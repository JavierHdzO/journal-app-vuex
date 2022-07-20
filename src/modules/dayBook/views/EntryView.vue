<template>
  <div class="etry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">Julio</span>
      <span class="mx-2 fs-2 fw-light">2022, martes</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button>
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="What happend today?"></textarea>
  </div>
  <Fab
    icon="fa-save"
  />

  <img src="https://images.unsplash.com/photo-1658241817660-b0c1ad84313d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" 
        alt="Entry Picture"
        class="img-thumbnail" />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Fab: defineAsyncComponent( () => import ('../Components/FloatingAcBtn.vue') )
    }
}
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
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.20) ;
    }
</style>