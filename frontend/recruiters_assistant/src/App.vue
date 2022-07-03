<template>
	<header></header>
	<Header />
	<!-- <HelloWorld /> -->
	<main class="pt-5">
		<router-view />
	</main>
	<Test msg="You did it!" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Axios from "axios";
import FormRecruterVue from "./components/FormRecruter.vue";
import Header from "./components/Header.vue";
// import HelloWorld from "./components/GGG.vue";
import Test from "./components/Test.vue";
export default defineComponent({
	data() {
		return {
			data: [],
		};
	},
	components: {
		Header,
		FormRecruterVue,
		Test
		// HelloWorld() { }
	},
	created() {},
	methods: {},
});
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style lang="scss">
@import "./scss/main.scss";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>
