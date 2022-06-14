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
  <v-app>
    <v-main>
      <router-view/>
    </v-main>

	
  <v-container
    class="px-0"
    fluid
  >
  gsgsgsgsgsg
    <v-checkbox
      v-model="checkbox"
      :label="`Checkbox 1: ${checkbox.toString()}`"
    ></v-checkbox>
  </v-container>
  </v-app>

  <FormRecruterVue :msg="'gg'"></FormRecruterVue>
	<RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Axios from "axios";
import FormRecruterVue from "./components/FormRecruter.vue";

export default defineComponent({
  name: 'App',
  data () {
    return {
    	 data: "",
		checkbox: true,
    }
	
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
});
</script>
<style lang="scss">
@import './scss/main.scss';
</style>
