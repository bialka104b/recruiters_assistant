import { defineComponent, h, type DefineComponent, type PropType } from "vue";

import { Bar } from "vue-chartjs";

import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
	type Plugin,
} from "chart.js";
import { Options } from "@/classess/optionsBarChart";


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
	name: "BarChart",
	components: {
		Bar,
	},
	props: {
		chartData: {},
		chartId: {
			type: String,
			default: "bar-chart",
		},
		width: {
			type: Number,
			default: 400,
		},
		height: {
			type: Number,
			default: 400,
		},
		cssClasses: {
			default: "",
			type: String,
		},
		styles: {
			type: Object as PropType<Partial<CSSStyleDeclaration>>,
			default: () => {},
		},
		plugins: {
			type: Array as PropType<Plugin<"bar">[]>,
			default: () => [],
		},
	},
	setup(props) {
		const chartData = props.chartData;
		const chartOptions = new Options();

		return () =>
			h(<DefineComponent<any>>Bar, {
				chartData,
				chartOptions,
				chartId: props.chartId,
				width: props.width,
				height: props.height,
				cssClasses: props.cssClasses,
				styles: props.styles,
				plugins: props.plugins,
			});
	},
});
