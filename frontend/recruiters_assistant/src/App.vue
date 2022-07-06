<template>
	<header></header>
	<div class="theme">
		<button @click="toggleTheme"
		class="btn p-0 buttonTheme">
			<span v-if="userTheme === 'dark'" class="material-symbols-outlined">
					dark_mode
			</span>
			<span v-if="userTheme === 'light'">
				<span class="material-symbols-outlined">
					light_mode
				</span>
			</span>
		</button>
	</div>
	<Header />
	<main class="pt-5">
		<router-view />
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormRecruterVue from "./components/FormRecruter.vue";
import Header from "./components/Header.vue";
import Test from "./components/Test.vue";
import { ref, onMounted } from "vue";
export type UserTheme = "light" | "dark";
export default defineComponent({
	setup() {

		const setTheme = (theme: UserTheme) => {
			localStorage.setItem("user-theme", theme);
			userTheme.value = theme;
			document.documentElement.className = theme;
		};

		const getTheme = (): UserTheme => {
			return localStorage.getItem("user-theme") as UserTheme;
		};

		const toggleTheme = (): void => {
			const activeTheme = localStorage.getItem("user-theme");
			if (activeTheme === "light") {
				setTheme("dark");
			} else {
				setTheme("light");
			}
		};

		const getMediaPreference = (): UserTheme => {
			const hasDarkPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
			if (hasDarkPreference) {
				return "dark";
			} else {
				return "light";
			}
		};

		const userTheme = ref<UserTheme>(getTheme() || getMediaPreference());

		onMounted(() => setTheme(userTheme.value));
		return {
			setTheme,
			getTheme,
			toggleTheme,
			getMediaPreference,
			userTheme
		}
	},
	data() {
		return {
			data: [],
		};
	},
	components: {
		Header,
		FormRecruterVue,
		Test,
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
