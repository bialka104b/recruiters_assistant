import {
	defineComponent, h, type DefineComponent,
	// type PropType
} from 'vue'

import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
//   type Plugin
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)
// import * as chartJs from 'chart.js'

// chartJs.Chart.register(chartJs.Title, chartJs.Tooltip, chartJs.Legend, chartJs.ArcElement, chartJs.CategoryScale)

export default defineComponent({
	name: 'DoughnutChart',
	components: {
		Doughnut
	},
	props: {
		chartData: {},
		chartId: {
			type: String,
			default: 'doughnut-chart'
		},
		width: {
			type: Number,
			default: 400
		},
		height: {
			type: Number,
			default: 400
		},
		cssClasses: {
			default: '',
			type: String
		},
		// styles: {
		// 	type: Object as PropType<Partial<CSSStyleDeclaration>>,
		// 	default: () => {}
		// },
		styles: {
			type: Object,
			default: () => {}
		},
		plugins: {
			type: Array,
			default: () => []
		}
  	},
 	setup(props) {
		// const chartData = {
		//   labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
		//   datasets: [
		//     {
		//       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
		//       data: [40, 20, 80, 10]
		//     }
		//   ]
		// }

		const chartOptions = {
		responsive: true,
		maintainAspectRatio: false
		}

		const chartData = props.chartData;
		// const chartOptions = props.chartOptions;

		return () => h((<DefineComponent<any>>Doughnut), {
			chartData,
			chartOptions,
			chartId: props.chartId,
			width: props.width,
			height: props.height,
			cssClasses: props.cssClasses,
			styles: props.styles,
			plugins: props.plugins
		})
	}
})
