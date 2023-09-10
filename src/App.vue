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
      <Button @click="goToProduct(1)">商品一</Button>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    footer
  </footer>
</template>

<script>
export default {
  data(){
    return {}
  },
	methods:{
    logout(){
      localStorage.removeItem('token')
      this.$router.push('/login')
  	},
    goToProduct(productId){
      this.$router.push({
        name: 'products',
        query: {
          id: productId
        }
      })
    }
  }
} 
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
