<template>
  <div class="product">
    <h1>
      {{ text }}
    </h1>
    <button @click="callName">123</button>
  </div>
  <Carousel v-model="value" loop>
      <CarouselItem>
          <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
          <div class="demo-carousel">4</div>
      </CarouselItem>
  </Carousel>
</template>

<script>
  export default {
    data () {
      return {
          value: 0,
          text: 'This is an product page'
      }
    },
    methods: {
      callName(){
        this.text = 'eeeee'
      }
    },
  }
</script>
<style>
.demo-carousel{
  width: 100%;
  height: 10rem;
  background-color: #ddd;
}
</style>
