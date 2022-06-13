<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
</script>
<script lang="ts">
import Axios from "axios";
import FormRecruterVue from "./components/FormRecruter.vue";
export default {
	data() {
		return {
			data: "",
		};
	},
	components: {
		FormRecruterVue,
	},
	created() {
		this.getik();
	},
	methods: {
		getik(): void {
			Axios.get(`http://localhost:8080/kandydaci`)
				.then((res) => {
					console.log(res, "res udało sie get");
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm getik");
				});
		},
		async poscik() {
			await Axios.delete(`http://localhost:8080/kandydaci/629c79da52d0e691f62da3e2`, {
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((res) => {
					console.log(res, "res udało sie delete");
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm");
				});
		},

		async create() {
			
			const config = {
              method: 'post',
              url: `http://localhost:8080/kandydaci/`,
              headers: { 
                'Content-Type': 'application/json',
			  },
			  data: {
				  Nazwisko: "Menda",
					Imie: "druga menda -"
			  }
            };
			await Axios(config)
			.then((res) => {
				console.log(res, "res udało sie create");
			})
			.catch((err) => {
				console.log(err, "error mmmmmmm create");
			});
		},
	},
};
</script>

<template>
	<header>
		<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			<button @click="poscik()">kasuj</button>
			<button @click="create()">create Menda</button>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div> -->
	</header>
	<FormRecruterVue :msg="'gg'"></FormRecruterVue>
	<RouterView />
</template>

<style lang="scss">
@import './scss/main.scss';
// @import "@/assets/base.css";

// #app {
// 	max-width: 1280px;
// 	margin: 0 auto;
// 	padding: 2rem;

// 	font-weight: normal;
// }

// header {
// 	line-height: 1.5;
// 	max-height: 100vh;
// }

// .logo {
// 	display: block;
// 	margin: 0 auto 2rem;
// }

// a,
// .green {
// 	text-decoration: none;
// 	color: hsla(160, 100%, 37%, 1);
// 	transition: 0.4s;
// }

// @media (hover: hover) {
// 	a:hover {
// 		background-color: hsla(160, 100%, 37%, 0.2);
// 	}
// }

// nav {
// 	width: 100%;
// 	font-size: 12px;
// 	text-align: center;
// 	margin-top: 2rem;
// }

// nav a.router-link-exact-active {
// 	color: var(--color-text);
// }

// nav a.router-link-exact-active:hover {
// 	background-color: transparent;
// }

// nav a {
// 	display: inline-block;
// 	padding: 0 1rem;
// 	border-left: 1px solid var(--color-border);
// }

// nav a:first-of-type {
// 	border: 0;
// }

// @media (min-width: 1024px) {
// 	body {
// 		display: flex;
// 		place-items: center;
// 	}

// 	#app {
// 		display: grid;
// 		grid-template-columns: 1fr 1fr;
// 		padding: 0 2rem;
// 	}

// 	header {
// 		display: flex;
// 		place-items: center;
// 		padding-right: calc(var(--section-gap) / 2);
// 	}

// 	header .wrapper {
// 		display: flex;
// 		place-items: flex-start;
// 		flex-wrap: wrap;
// 	}

// 	.logo {
// 		margin: 0 2rem 0 0;
// 	}

// 	nav {
// 		text-align: left;
// 		margin-left: -1rem;
// 		font-size: 1rem;

// 		padding: 1rem 0;
// 		margin-top: 1rem;
// 	}
// }
</style>
