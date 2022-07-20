<template>
  <div class="container">
    <h1>Hola mundo</h1>

    <button @click="getDayBook" class="btn btn-success me-2">Success</button>
    <button @click="getDayBook" class="btn btn-secondary me-2">Secondary</button>
    <button @click="getDayBook" class="btn btn-primary">Primary</button>

    <router-link to="daybook">DayBook</router-link>
  </div>
</template>

<script>
export default {

  methods: {
    getDayBook(){
      this.$router.push({ name: 'no-entry' })
    }
  }

}
</script>

<style>

</style>