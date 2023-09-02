import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'

import App from './App.vue'
import router from './router'
import store from './store'

import 'view-ui-plus/dist/styles/viewuiplus.css'

// import "./assets/scss/reset.scss"

// 原始
// createApp(App).use(store).use(router).mount('#app')
// 加入ViewUIPlus
// createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')

// 先宣告
const vueApp = createApp(App)
vueApp.use(store)
    .use(router)
    .use(ViewUIPlus)
    .mount('#app')
