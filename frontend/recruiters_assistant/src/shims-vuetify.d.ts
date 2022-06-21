declare module "*.vue" {
	import type { DefineComponent } from "vue";
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
declare module "vue-multiselect";
declare module "fs";
// declare module 'vue/types/vue' {
//   interface Vue {
//     renderChart(chartData: any, options?: any): void;
//   }
// }
