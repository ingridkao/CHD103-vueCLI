<template>
    <div class="product">
      <h1>
        {{ $route.params.id }}
      </h1>
    </div>
    <div v-if="loading" class="loading">loading</div>
    <div v-else class="wrap" >
      <div 
        v-for="prod in products" 
        :key="prod.id"
        class="card"
      >
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
          fetch('https://fakestoreapi.com/products/1')
          .then(res=>res.json())
          .then(json=>{
            console.log(json);
            this.loading = false
            // this.products = json
          })
        }
      },
      mounted() {
        this.fetchProd()
      }
    }
  </script>
  <style>
  .loading{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    top: 0;
  }
  </style>
  