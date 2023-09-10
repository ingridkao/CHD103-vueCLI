<template>
  <div class="product">
    <h1>
      {{ $route.query.q }}
      {{ $route.query.type }}
    </h1>
  </div>
  <!-- <Carousel v-model="value" loop>
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
  </Carousel> -->
  <div v-if="loading" class="loading">loading</div>
  <div v-else class="wrap" >
    <div 
      v-for="prod in products" 
      :key="prod.id"
      class="card"
    >
      <div v-if="prod">
          <p class="cardName">{{prod.title}}</p>
          <img :src="prod.image" :alt="prod.title">
          <p>$ {{prod.price}}</p>
          <p v-if="prod.rating">
              <span v-for="star in parseInt(prod.rating.rate)">
                  🌟
              </span>
              {{prod.rating.count}}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          value: 0,
          products: [],
          loading: true
      }
    },
    methods: {
      fetchProd(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
          this.loading = false
          this.products = json
        })
      }
    },
    mounted() {
      this.fetchProd()
    }
  }
</script>
<style>
/* .demo-carousel{
  width: 100%;
  height: 10rem;
  background-color: #ddd;
} */
.loading{
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style>
