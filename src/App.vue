<template>
  <header>
    <button class="logo">
      <!-- 非v-bind的圖片載入方式 -->
      <img src="~@/assets/image/me.jpeg" alt="me">
    </button>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/product">Product</router-link> |
      <button @click="logout">logout</button> 
      <Button @click="goToProduct(1)">商品10</Button>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <Btn :text="btn1Name" @clickEvent="clickParent"/>
    <Btn :text="'red'" />
    <Btn >
      <template v-slot:footer>
        按鈕啊
      </template>
    </Btn>
    {{ storeCount }}
    <button @click="addStoreCount">+1</button>
    {{ $store.state.color }}
    <button @click="updateWebColor()">改顏色</button>
  </footer>
</template>

<script>
import Btn from '@/components/Button.vue'
export default {
  components:{
    Btn
  },
  data(){
    return {
      btn1Name: '123213'
    }
  },
  computed:{
    storeCount(){
      return this.$store.state.count
    }
  },
	methods:{
    addStoreCount(){
      this.$store.commit('increment')
    },
    updateWebColor(){
      const newColor = this.$store.state.color === 'white'? 'dark': 'white' 
      this.$store.commit('updateColor', newColor)
    },
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/login')
  	},
    goToProduct(productId){
      this.$router.push({
          name: 'productDetail',
          params: {
            id: 10
          }
        })
    },
    clickParent(text){
      console.log('clickParent:' + text);
      this.btn1Name = 'AAAAA'
    }
  }
} 
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
