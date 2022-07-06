<template>
	<header class="w-100">
		<nav class="navbar navbar-expand navbar-dark">
			<div class="collapse navbar-collapse" id="navbarNav">
				<div class="logo px-sm-2 px-md-5">
					<img src="../assets/icons/logo.png" alt="" />
				</div>
				<ul class="ml-auto navbar-nav px-sm-2 px-md-5 navbarLinkGroup">
					<li class="nav-item active px-1">
						<router-link to="/" class="nav-link font-weight-bold navButton"
							>Start</router-link
						>
					</li>
					<!-- <li class="nav-item">
						<router-link to="/tables" class="nav-link font-weight-bold">Widok tabeli</router-link>
					</li> -->
					<li class="nav-item px-1">
						<router-link to="/graphs" class="nav-link font-weight-bold"
							>Wykresy</router-link
						>
					</li>
					<li class="nav-item px-1">
						<router-link to="/about" class="nav-link font-weight-bold"
							>O Nas</router-link
						>
					</li>
				</ul>
			</div>
		</nav>
	</header>
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
	created() {
		
	},
	methods: {
	},
});
</script>

<style scoped lang="scss">
header {
	background-color: rgb(51, 51, 51);
	position: fixed;
	z-index: 50;
}

img {
	max-height: 50px;
}
</style>
