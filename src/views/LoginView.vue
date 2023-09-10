<template>
	<input type="email" v-model="username"/>
	<input type="password" v-model="pswdddv"/>
	<button @click.prevent="signin">登入</button>
</template>

<script>
export default {
  	name: 'login',
	data () {
		return {
			username:'mor_2314',
			pswdddv:'83r5^_'
		}
	},
	methods:{
    	signin(){
			// console.log(this.username);
			// console.log(this.pswdddv);
			fetch('https://fakestoreapi.com/auth/login',{
            	method:'POST',
				headers: new Headers({
					"Content-Type": "application/json",
				}),
				body:JSON.stringify({
					username: this.username,
					password: this.pswdddv
				})
			})
            .then(res=>res.json())
            .then(json=>{
				if(json && json.token){
					localStorage.setItem('token', json.token)
					this.$router.push('/')
				}
			})
            .catch(error=>{
				console.error(json)
				//....
			})
			// fetch('https://fakestoreapi.com/auth/login',{
			// 	method:'POST',
			// 	headers: new Headers({
			// 		"Content-Type": "application/json",
			// 	}),
			// 	body:JSON.stringify({
			// 		username: "mor_2314",
			// 		password: "83r5^_"
			// 	})
			// })
			// .then(res=>res.json())
			// .then(json=>{
			// 	if(json.token){
			// 		localStorage.setItem('token', json.token)
			// 		this.$router.push('/')
			// 	}
			// })
    	}
  	}
}
</script>