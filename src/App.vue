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
      <router-link to="/product">Product</router-link>
    </nav>
    <button>
      <Button>漢堡</Button>
    </button>
  </header>

  <main>
    <router-view/>
  </main>

  <footer>
    sdfdsfdsfdsfdsfsfsdfsd
  </footer>
</template>

<style lang="scss">
@import "@/assets/scss/main.scss";
header{
  position: fixed;
  top:0;
  left: 0;

  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  .logo{
    width: 4rem;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}
main{
  margin-top: 10rem;
}
</style>
