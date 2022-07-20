<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push( { name: 'entry', params: {id:10} } )"
  
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">18</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-1 fw-light">22022, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellat
      consequuntur maxime earum, quisquam placeat nihil magnam explicabo
      blanditiis corporis sapiente minima voluptates, quam animi laudantium
      fugiat voluptate, repudiandae tempora esse. Labore sequi necessitatibus
      temporibus unde eum delectus neque. Soluta, molestias exercitationem. Fuga
      odit qui nesciunt necessitatibus rerum, reprehenderit odio!
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease;

  &:hover {
    background: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>