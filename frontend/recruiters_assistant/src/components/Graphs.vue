<template>
	<div class="row graphs">
		<div class="col-6 my-2" v-if="result.length > 0">
			<!-- {{technologyArrBack}} -->
			<h1 class="text-center">Technologie Backend</h1>
			<DoughnutChart :chartData="technologyBackChartData" />
		</div>
		<div class="col-6 my-2" v-if="result.length > 0">
			<!-- {{technologyArr}} -->
			<h1 class="text-center">Technologie FRONTEND</h1>
			<DoughnutChart :chartData="technologyChartData" />
		</div>
		<div class="col-6 my-2" v-if="result.length > 0">
			<!-- {{technologyArrOther}} -->
			<h1 class="text-center">Inne narzędzia i metodyki</h1>
			<DoughnutChart :chartData="technologyOtherChartData" />
		</div>
		<div class="col-5 my-2" v-if="result.length > 0">
			<!-- {{relocationArr}} -->
			<h1 class="text-center">Relokacja</h1>
			<BarChart :chartData="relocationChartData" />
		</div>
		<div class="col-4 my-2" v-if="result.length > 0">
			<!-- {{specializationArr}} -->
			<h1 class="text-center">Specjalizacja</h1>
			<DoughnutChart :chartData="specializationChartData" />
		</div>
		<div class="col-4 my-2" v-if="result.length > 0">
			<h1 class="text-center">Angielski</h1>
			<!-- {{ englishArr }} -->
			<!-- {{ englishArr2 }} -->
			<DoughnutChart :chartData="englishChartData" />
		</div>
		<div class="col-4 my-2" v-if="result.length > 0">
			<h1 class="text-center">Niemiecki</h1>
			<!-- {{ germanArr }} -->
			<DoughnutChart :chartData="germanChartData" />
		</div>
		<div class="col-12 my-2" v-if="result.length > 0">
			<!-- {{ageArrData}} -->
			<!-- <br> {{labelsAgeArr}} -->
			<h1 class="text-center">Wiek</h1>
			<BarChart :chartData="ageChartData" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DoughnutChart from "../chart/DoughnutChart";
import BarChart from "../chart/BarChart";
import { Params } from "../classess/defaultParamsGetAllPerson";
import Axios from "axios";
import lodash from "lodash";
import type { Person } from "@/classess/person";

export default defineComponent({
	name: "Graphs",
	components: {
		DoughnutChart,
		BarChart,
	},
	data() {
		return {
			result: [],
			germanArr: [0, 0, 0, 0, 0, 0, 0],
			germanArr2: [0, 0, 0, 0, 0, 0, 0],
			englishArr: [0, 0, 0, 0, 0, 0, 0],
			englishArr2: [0, 0, 0, 0, 0, 0, 0],
			specializationArr: [0, 0, 0, 0, 0],
			technologyArr: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			technologyArrOther: [0, 0, 0, 0, 0, 0, 0, 0, 0],
			technologyArrBack: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			wiekArr: [],
			labelsAgeArr: [],
			ageArrData: [],
			relocationArr: [],
			labelsRelocationArr: [],
			relocationArrData: [],

			chartData: {},
			germanChartData: {},
			englishChartData: {},
			relocationChartData: {},
			specializationChartData: {},
			technologyChartData: {},
			technologyBackChartData: {},
			technologyOtherChartData: {},
			ageChartData: {},
		};
	},
	created() {
		this.getAllPerson();
		this.germanChartData = this.returnChartDataGerman();
		this.englishChartData = this.returnChartDataEnglish();
		this.specializationChartData = this.returnChartDataSpec();
		this.technologyChartData = this.returnChartDataTechnology();
		this.technologyBackChartData = this.returnChartDataTechnologyBack();
		this.technologyOtherChartData = this.returnChartDataTechnologyOther();
	},

	methods: {
		returnChartDataRelocation() {
			return {
				labels: JSON.parse(JSON.stringify(this.labelsRelocationArr)),
				datasets: [
					{
						label: "Ilość osób",
						backgroundColor: [
							"rgba(255, 205, 86, 0.9)",
							"rgba(54, 162, 235, 0.9)",
							"rgba(153, 102, 255, 0.9)",
							"rgba(201, 203, 207, 0.9)",
						],
						data: this.relocationArrData,
					},
				],
			};
		},
		returnChartDataAge() {
			return {
				labels: JSON.parse(JSON.stringify(this.labelsAgeArr)),
				datasets: [
					{
						label: "Ilość osób",
						backgroundColor: [
							"rgba(255, 99, 132, 0.9)",
							"rgba(255, 159, 64, 0.9)",
							"rgba(255, 205, 86, 0.9)",
							"rgba(75, 192, 192, 0.9)",
							"rgba(54, 162, 235, 0.9)",
							"rgba(153, 102, 255, 0.9)",
							"rgba(201, 203, 207, 0.9)",
						],
						data: this.ageArrData,
					},
				],
			};
		},
		returnChartDataTechnologyOther() {
			return {
				labels: [
					"agile",
					"aws",
					"bash",
					"linux",
					"powershell",
					"kanban",
					"scrum",
					"vb",
					"windows",
				],
				datasets: [
					{
						backgroundColor: [
							"#41b883e6",
							"#00D8FFe6",
							"#DD1B16e6",
							"#00B945e6",
							"#9004A8e6",
							"#DCF900e6",
							"#FF4100e6",
							"#1509E6e6",
							"#FB0023e6",
							"#3AF200e6",
							"#FFC300e6",
							"#E900AFe6",
							"#00DEDEe6",
							"#00DFCFe6",
						],
						data: this.technologyArrOther,
					},
				],
			};
		},
		returnChartDataTechnologyBack() {
			return {
				labels: [
					"android",
					"c#",
					"c++",
					"c",
					"delphi",
					"ios",
					"java",
					".net",
					"node",
					"oracle",
					"perl",
					"php",
					"python",
					"ruby",
					"scala",
					"spring",
				],
				datasets: [
					{
						backgroundColor: [
							"#41B883e6",
							"#00D8FFe6",
							"#DD1B16e6",
							"#00B945e6",
							"#9004A8e6",
							"#DCF900e6",
							"#FF4100e6",
							"#1509E6e6",
							"#FB0023e6",
							"#3AF200e6",
							"#FFC300e6",
							"#E900AFe6",
							"#00DEDEe6",
							"#00DFCFe6",
						],
						data: this.technologyArrBack,
					},
				],
			};
		},
		returnChartDataTechnology() {
			return {
				labels: [
					"Adobe",
					"Angular",
					"Bootstrap",
					"Css",
					"Html",
					"Javascript",
					"jQuery",
					"Less",
					"Photoshop",
					"React",
					"Sass",
					"Scss",
					"Vue",
				],
				datasets: [
					{
						backgroundColor: [
							"#41B883e6",
							"#00D8FFe6",
							"#DD1B16e6",
							"#00B945e6",
							"#9004A8e6",
							"#DCF900e6",
							"#FF4100e6",
							"#1509E6e6",
							"#FB0023e6",
							"#3AF200e6",
							"#FFC300e6",
							"#E900AFe6",
							"#00DEDEe6",
							"#00DFCFe6",
						],
						data: this.technologyArr,
					},
				],
			};
		},
		returnChartDataSpec() {
			return {
				labels: ["specjalność", "Tester", "Frontend", "Backend", "Inne"],
				datasets: [
					{
						backgroundColor: [
							"#00B945e6",
							"#9004A8e6",
							"#DCF900e6",
							"#DAD4DCe6",
							"#DD1B16e6",
						],
						data: this.specializationArr,
					},
				],
			};
		},
		returnChartDataGerman() {
			return {
				labels: ["A1", "A2", "B1", "B2", "C1", "C2", "nieUmie"],
				datasets: [
					{
						backgroundColor: [
							"#41B883e6",
							"#00D8FFe6",
							"#DD1B16e6",
							"#00B945e6",
							"#9004A8e6",
							"#DCF900e6",
							"#DAD4DCe6",
						],
						data: this.germanArr2,
					},
					{
						backgroundColor: [
							"#41B883e6",
							"#00D8FFe6",
							"#DD1B16e6",
							"#00B945e6",
							"#9004A8e6",
							"#DCF900e6",
							"#DAD4DCe6",
						],
						data: this.germanArr,
					},
				],
			};
		},
		returnChartDataEnglish() {
			return {
				labels: ["A1", "A2", "B1", "B2", "C1", "C2", "nieUmie"],
				datasets: [
					{
						backgroundColor: [
							"#41B883",
							"#00D8FF",
							"#DD1B16",
							"#00B945",
							"#9004A8",
							"#DCF900",
							"#DAD4DC",
						],
						data: this.englishArr2,
					},
					{
						backgroundColor: [
							"#41B883",
							"#00D8FF",
							"#DD1B16",
							"#00B945",
							"#9004A8",
							"#DCF900",
							"#DAD4DC",
						],
						data: this.englishArr,
					},
				],
			};
		},
		relokacjaValue(string: string): string {
			if (string == "-" || string == "") {
				return "nie";
			}
			return string;
		},
		sprawdzRelokacje(result: []) {
			result.forEach((relocation: Person) => {
				(<Array<string>>this.relocationArr).push(
					this.relokacjaValue(relocation.Relokacja.toLowerCase().trim()),
				);
			});
			const objectRelocation = lodash.countBy(this.relocationArr);
			(<Array<string>>this.labelsRelocationArr) = lodash.keys(objectRelocation);
			(<Array<number>>this.relocationArrData) = lodash.values(objectRelocation);
			this.relocationChartData = this.returnChartDataRelocation();
		},
		sprawdzWiek(result: []) {
			result.forEach((age: Person) => {
				(<Array<number>>this.wiekArr).push(Number(age.Wiek));
			});
			const objectAge = lodash.countBy(this.wiekArr);
			const key = lodash.keys(objectAge);
			const value = lodash.values(objectAge);

			(<Array<string>>this.labelsAgeArr) = key;
			(<Array<number>>this.ageArrData) = value;
			(<string>this.labelsAgeArr[0]) = "nie podano";
			(<string>this.labelsAgeArr[this.labelsAgeArr.length - 1]) = "nie podano";

			this.ageChartData = this.returnChartDataAge();
		},
		sprawdzInneNarzedzia(result: []) {
			result.forEach((technology: any, index: number) => {
				const text = technology.Technologie.toLowerCase().trim();
				const myRegexC = new RegExp(/\bc(?= )|c(?=,)|c(?=\/)\b/);
				const myRegexJava = new RegExp(/\bjava(?= )|java(?=,)\b/);
				if (text.includes("agile")) {
					this.technologyArrOther[0] = this.technologyArrOther[0] + 1;
				}
				if (text.includes("aws")) {
					this.technologyArrOther[1] = this.technologyArrOther[1] + 1;
				}
				if (text.includes("bash")) {
					this.technologyArrOther[2] = this.technologyArrOther[2] + 1;
				}
				if (text.includes("linux")) {
					this.technologyArrOther[3] = this.technologyArrOther[3] + 1;
				}
				if (text.includes("kanban")) {
					this.technologyArrOther[4] = this.technologyArrOther[4] + 1;
				}
				if (text.includes("powershell")) {
					this.technologyArrOther[5] = this.technologyArrOther[5] + 1;
				}
				if (text.includes("scrum")) {
					this.technologyArrOther[6] = this.technologyArrOther[6] + 1;
				}
				if (text.includes("vb")) {
					this.technologyArrOther[7] = this.technologyArrOther[7] + 1;
				}
				if (text.includes("windows")) {
					this.technologyArrOther[8] = this.technologyArrOther[8] + 1;
				}
			});
		},
		sprawdzTechnologieBack(result: []) {
			result.forEach((technology: any, index: number) => {
				const text = technology.Technologie.toLowerCase().trim();
				const myRegexC = new RegExp(/\bc(?= )|c(?=,)|c(?=\/)\b/);
				const myRegexJava = new RegExp(/\bjava(?= )|java(?=,)\b/);
				if (text.includes("android")) {
					this.technologyArrBack[0] = this.technologyArrBack[0] + 1;
				}
				if (text.includes("c#")) {
					this.technologyArrBack[1] = this.technologyArrBack[1] + 1;
				}
				if (text.includes("c++")) {
					this.technologyArrBack[2] = this.technologyArrBack[2] + 1;
				}
				if (text.match(myRegexC)) {
					this.technologyArrBack[3] = this.technologyArrBack[3] + 1;
				}
				if (text.includes("delphi")) {
					this.technologyArrBack[4] = this.technologyArrBack[4] + 1;
				}
				if (text.includes("ios")) {
					this.technologyArrBack[5] = this.technologyArrBack[5] + 1;
				}
				if (text.match(myRegexJava)) {
					this.technologyArrBack[6] = this.technologyArrBack[6] + 1;
				}
				if (text.includes(".net")) {
					this.technologyArrBack[7] = this.technologyArrBack[7] + 1;
				}
				if (text.includes("node")) {
					this.technologyArrBack[8] = this.technologyArrBack[8] + 1;
				}
				if (text.includes("oracle")) {
					this.technologyArrBack[9] = this.technologyArrBack[9] + 1;
				}
				if (text.includes("perl")) {
					this.technologyArrBack[10] = this.technologyArrBack[10] + 1;
				}
				if (text.includes("php") || text.includes("scss")) {
					this.technologyArrBack[11] = this.technologyArrBack[11] + 1;
				}
				if (text.includes("python")) {
					this.technologyArrBack[12] = this.technologyArrBack[12] + 1;
				}
				if (text.includes("ruby")) {
					this.technologyArrBack[13] = this.technologyArrBack[13] + 1;
				}
				if (text.includes("scala")) {
					this.technologyArrBack[14] = this.technologyArrBack[14] + 1;
				}
				if (text.includes("spring")) {
					this.technologyArrBack[15] = this.technologyArrBack[15] + 1;
				}
			});
		},
		sprawdzTechnologieFront(result: []) {
			result.forEach((technology: any, index: number) => {
				const text = technology.Technologie.toLowerCase().trim();
				const myRegexC = new RegExp(/\bcss(?= )|css(?=,)|css(?=\/)\b/);
				if (text.includes("adobe")) {
					this.technologyArr[0] = this.technologyArr[0] + 1;
				}
				if (text.includes("angular")) {
					this.technologyArr[1] = this.technologyArr[1] + 1;
				}
				if (text.includes("bootstrap")) {
					this.technologyArr[2] = this.technologyArr[2] + 1;
				}
				if (text.match(myRegexC)) {
					this.technologyArr[3] = this.technologyArr[3] + 1;
				}
				if (text.includes("html")) {
					this.technologyArr[5] = this.technologyArr[5] + 1;
				}
				if (text.includes("javascript")) {
					this.technologyArr[6] = this.technologyArr[6] + 1;
				}
				if (text.includes("jQuery")) {
					this.technologyArr[7] = this.technologyArr[7] + 1;
				}
				if (text.includes("less")) {
					this.technologyArr[8] = this.technologyArr[8] + 1;
				}
				if (text.includes("photoshop")) {
					this.technologyArr[9] = this.technologyArr[9] + 1;
				}
				if (text.includes("react")) {
					this.technologyArr[10] = this.technologyArr[10] + 1;
				}
				if (text.includes("sass") || text.includes("scss")) {
					this.technologyArr[11] = this.technologyArr[11] + 1;
				}
				if (text.includes("vue")) {
					this.technologyArr[12] = this.technologyArr[12] + 1;
				}
			});
		},
		sprawdzSpecjalnosc(result: []) {
			result.forEach((lvlEnglish: any, index: number) => {
				const text = lvlEnglish.Specjalnosc.toLowerCase().trim();
				if (text.includes("specjalnosc") || text.includes("specjalność")) {
					this.specializationArr[0] = this.specializationArr[0] + 1;
				}
				if (text.includes("tester")) {
					this.specializationArr[1] = this.specializationArr[1] + 1;
				}
				if (text.includes("frontend")) {
					this.specializationArr[2] = this.specializationArr[2] + 1;
				}
				if (text.includes("backend")) {
					this.specializationArr[3] = this.specializationArr[3] + 1;
				}
				if (text === "" || text == null) {
					this.specializationArr[4] = this.specializationArr[4] + 1;
				}
			});
		},

		sprawdzAngielski(result: []) {
			result.forEach((lvlEnglish: any, index: number) => {
				const text = lvlEnglish.Angielski.toLowerCase().trim();
				if (text == "angielski" || text == "angielski a1") {
					this.englishArr[0] = this.englishArr[0] + 1;
					this.englishArr2[0] = this.englishArr2[0] + 1;
				} else if (text == "angielski a2") {
					this.englishArr[1] = this.englishArr[1] + 1;
					this.englishArr2[1] = this.englishArr2[1] + 1;
				} else if (text == "angielski b1") {
					this.englishArr[2] = this.englishArr[2] + 1;
					this.englishArr2[2] = this.englishArr2[2] + 1;
				} else if (text == "angielski b2") {
					this.englishArr[3] = this.englishArr[3] + 1;
					this.englishArr2[3] = this.englishArr2[3] + 1;
				} else if (text == "angielski c1") {
					this.englishArr[4] = this.englishArr[4] + 1;
					this.englishArr2[4] = this.englishArr2[4] + 1;
				} else if (text == "angielski c2") {
					this.englishArr[5] = this.englishArr[5] + 1;
					this.englishArr2[5] = this.englishArr2[5] + 1;
				} else if (text == "" || text === null || text == undefined) {
					this.englishArr[6] = this.englishArr[6] + 1;
				} else {
					console.log(text, index);
				}
			});
		},
		sprawdzNiemiecki(result: []) {
			result.forEach((lvlGerman: any, index: number) => {
				const text = lvlGerman.Niemiecki.toLowerCase().trim();
				if (text == "niemiecki" || text == "niemiecki a1") {
					this.germanArr[0] = this.germanArr[0] + 1;
					this.germanArr2[0] = this.germanArr2[0] + 1;
				} else if (text == "niemiecki a2") {
					this.germanArr[1] = this.germanArr[1] + 1;
					this.germanArr2[1] = this.germanArr2[1] + 1;
				} else if (text == "niemiecki b1") {
					this.germanArr[2] = this.germanArr[2] + 1;
					this.germanArr2[2] = this.germanArr2[2] + 1;
				} else if (text == "niemiecki b2") {
					this.germanArr[3] = this.germanArr[3] + 1;
					this.germanArr2[3] = this.germanArr2[3] + 1;
				} else if (text == "niemiecki c1") {
					this.germanArr[4] = this.germanArr[4] + 1;
					this.germanArr2[4] = this.germanArr2[4] + 1;
				} else if (text == "niemiecki c2") {
					this.germanArr[5] = this.germanArr[5] + 1;
					this.germanArr2[5] = this.germanArr2[5] + 1;
				} else if (text === "" || text === null || text == "-") {
					this.germanArr[6] = this.germanArr[6] + 1;
				} else {
					// console.log(text, index);
				}
			});
		},
		async getAllPerson() {
			const params = new Params();

			await Axios.get(`http://localhost:8080/kandydaci`, { params })
				.then((res) => {
					this.result = res.data;
					this.sprawdzNiemiecki(res.data);
					this.sprawdzAngielski(res.data);
					this.sprawdzSpecjalnosc(res.data);
					this.sprawdzTechnologieFront(res.data);
					this.sprawdzTechnologieBack(res.data);
					this.sprawdzInneNarzedzia(res.data);
					this.sprawdzWiek(res.data);
					this.sprawdzRelokacje(res.data);
				})
				.catch((err) => {
					console.log(err, "error getAllPerson()");
					console.error(err.message);
				});
		},
	},
});
</script>

<style lang="scss">
.graphs {
	margin: 50px 0 0 0;
}
</style>
