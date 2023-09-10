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
  <transition v-if="loading">
    <LoadingBox/>
  </transition>
    <div v-else class="wrap" >
      <div 
        v-for="prod in productDisplay" 
        :key="prod.id"
        class="card"
        @click="goToProduct(prod)"
      >
        <template v-if="prod" >
            <p class="cardName">{{prod.title}}</p>
            <div class="cardImg">
              <img :src="prod.image" :alt="prod.title">
            </div>
            <p>$ {{prod.price}}</p>
            <p v-if="prod.rating">
                <span v-for="star in parseInt(prod.rating.rate)">
                    🌟
                </span>
                {{prod.rating.count}}
            </p>
        </template>
      </div>
      <Page 
        :total="products.length" 
        show-sizer
        :page-size-opts="[4, 8, 24]"
        :page-size="pageSize"
        @on-change="updatePage"
      />
    </div>
</template>

<script>
  import LoadingBox from '@/components/Loading.vue' 
  export default {
    components: {
      LoadingBox: LoadingBox
    },
    data () {
      return {
          value: 0,
          products: [],
          productDisplay: [],
          loading: true,
          pageSize: 4,
          currentPage: 1,
      }
    },
    methods: {
      fetchProd(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
          this.loading = false
          this.products = json
          this.updatePage(1)
        })
      },
      updatePage(page){
        // console.log(page);
        this.currentPage = page
        this.productDisplay = this.products
        const startIdx = (this.currentPage - 1) * this.pageSize
        const endIdx = startIdx + this.pageSize
        this.productDisplay = this.products.slice(startIdx, endIdx);
      },
      goToProduct(product){
        // console.log(product);
        this.$router.push({
          name: 'productDetail',
          params: {
            id: product.id
          }
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
.wrap{
  display: inline-flex;
  flex-wrap: wrap;
  height: 80vh;
  overflow: scroll;
}
.card{
    width: 10rem;
    border: 1px solid #ddd;
    margin: .5rem;
    padding: .5rem;
}
.cardImg{
  overflow: hidden;
  height: 10rem;
}
img{
  object-fit: contain;
  height: 100%;
}
</style>