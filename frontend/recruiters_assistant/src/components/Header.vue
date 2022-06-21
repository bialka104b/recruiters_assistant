<template>
	<div class="w-100 position-relative">
		cokolwiek
		<router-link to="/" class="nav-link font-weight-bold">Strona główna</router-link>
		<router-link to="/tables" class="nav-link font-weight-bold">Widok tabeli</router-link>
		<router-link to="/about" class="nav-link font-weight-bold">Widok About</router-link>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
	name: "Header",
	components: {},
	data() {
		return {
			// lang: ["en", "pl"],
			// showDropdown: false,
		};
	},
	methods: {
		// handleShowDropdown() {
		// 	this.showDropdown = !this.showDropdown;
		// },
	},
});
</script>
