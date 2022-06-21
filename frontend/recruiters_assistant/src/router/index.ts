import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormRecruterVue from "../components/FormRecruter.vue";
import Tables from "../components/Tables.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: FormRecruterVue
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
		component: () => import('../views/AboutView.vue')
		},
			{
				path: "/tables",
				name: "Tables",
				component: Tables,
			},
	]
})

export default router
