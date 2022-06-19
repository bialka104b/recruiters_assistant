<template>
	<header></header>
	<FormRecruterVue :msg="'gg'"></FormRecruterVue>
	<RouterView />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Axios from "axios";
import FormRecruterVue from "./components/FormRecruter.vue";
export default defineComponent({
	data() {
		return {
			data: [],
		};
	},
	components: {
		FormRecruterVue,
	},
	created() {},
	methods: {
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
					console.log(err, "error ");
				});
		},

		async create() {
			const config = {
				method: "post",
				url: `http://localhost:8080/kandydaci/`,
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					Nazwisko: "Menda",
					Imie: "druga menda -",
				},
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
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss">
@import "./scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
