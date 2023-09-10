<template>
    <!-- <div class="product">
      <h1>
        {{ $route.params.id }}
      </h1>
    </div> -->
    <div v-if="loading" class="loading">loading</div>
    <div v-else class="wrap" >
      {{ products }}
    </div>
  </template>
  
  <script>
    export default {
      data () {
        return {
            products: {},
            loading: true
        }
      },
      methods: {
        fetchProd(){
          this.loading = true
          // const target = json.find(item=>item.id == this.$route.params.id)
          fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
          .then(res=>res.json())
          .then(json=>{
            this.loading = false
            this.products = json
          })
        }
      },
      watch: {
        '$route.params.id'(newVal){
          // console.log(newVal);
          this.fetchProd()
        }
      },
      mounted() {
        this.fetchProd()
      }
    }
  </script>
  