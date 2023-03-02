<script lang="ts">
import { createApp, defineComponent } from "vue";
import Axios from "axios";
import lodash from "lodash";
import VueMultiselect from "vue-multiselect";
import EditPerson from "./EditPerson.vue";
import CreatePerson from "./CreatePerson.vue";
import DeletePerson from "./DeletePerson.vue";
import { Person } from "../classess/person";
import { LevelObject } from "../classess/levelLanguages";
import { Params } from "@/classess/defaultParamsGetAllPerson";

export default defineComponent({
	name: "FormRecruterVue",
	components: {
		VueMultiselect,
		EditPerson,
		DeletePerson,
		CreatePerson,
	},
	data() {
		return {
			candidate: new Person(),

			adobe: false,
			agile: false,
			android: false,
			angular: false,
			aws: false,
			bash: false,
			bootstrap: false,
			css: false,
			csharp: false,
			cpp: false,
			c: false,
			delphi: false,
			html: false,
			ios: false,
			java: false,
			javascript: false,
			jQuery: false,
			kanban: false,
			less: false,
			linux: false,
			dotNet: false,
			node: false,
			oracle: false,
			perl: false,
			photoshop: false,
			php: false,
			powershell: false,
			python: false,
			react: false,
			ruby: false,
			sass: false,
			scala: false,
			scrum: false,
			spring: false,
			sql: false,
			scss: false,
			swift: false,
			vue: false,
			vb: false,
			windows: false,

			basic: [], //upload file
			nazwisko: "",
			specjalnosc: "",
			miejscowosc: "",

			angielski: false,
			angielskia2: "",
			angielskib1: "",
			angielskib2: "",
			angielskic1: "",
			angielskic2: "",

			niemiecki: false,
			niemieckia2: "",
			niemieckib1: "",
			niemieckib2: "",
			niemieckic1: "",
			niemieckic2: "",

			pozostaleJezyki: "",
			result: [],
			resultDisplay: [],

			a: 4,

			valueCurrentStartItem: 0,
			arrayTechnologies: [],
			englishLevel: new LevelObject("A2+",  []),
			// englishLevel: { 	level: "A2+",	objectArr: [] },
			germanLevel: new LevelObject("A1+",  []),
			myLevel: [
				// {level: "Clear",	objectArr: [] },
				new LevelObject(),
				new LevelObject("A2",  ["A2", "B1", "B2", "C1", "C2"]),
				new LevelObject("B1",  ["B1", "B2", "C1", "C2"]),
				new LevelObject("B2",  ["B2", "C1", "C2"]),
				new LevelObject("C1",  ["C1", "C2"]),
				new LevelObject("C2",  ["C2"]),
			],

			//MODAL FULL
			showModal: false,
			showModalDelete: false,
			showModalEdit: false,
			showModalCreate: false,
			message: "jakiś tekst",

			uploadTextFile: "",
		};
	},
	async created() {
		await this.getAllPerson();
		setTimeout(() => {
			this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem + 9);
		}, 1000);

		await this.ggg();
	},
	
	methods: {
		async ggg() { 
			const config = {
				method: "post",
				url: `https://panel.lugomat.pl/api/external/session`,
				headers: {
					"Content-Type": "application/json",
				},
				data: {
					user: {
						email: "tomasz.barylski@atal.pl",
						password: "password"
					}
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
		closeDelete() {
			this.showModalDelete = false;
		},
		closeEdit() {
			this.showModalEdit = false;
		},
		closeCreate() {
			this.showModalCreate = false;
		},
		successDelete() {
			this.succes();
		},
		successEdit() {
			this.succes();
		},
		successCreate() {
			this.succes();
		},
		succes() {
			setTimeout(() => {
				this.getAllPerson();
			}, 1500);
			setTimeout(() => {
				this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem + 9);
			}, 2000);
		},
		showPersonDelete(person: any) {
			this.showModalDelete = !this.showModalDelete;
			this.candidate = new Person(person._id, person.Imie, person.Nazwisko);
		},
		showPersonCreate() {
			this.showModalCreate = !this.showModalCreate;
		},
		showPersonEdit(person: any) {
			this.showModalEdit = !this.showModalEdit;
			this.candidate = new Person(
				person._id,
				person.Imie,
				person.Nazwisko,
				person.Angielski,
				person.Niemiecki,
				person.Doswiadczenie,
				person.Email,
				person.Firmy_Wspolpraca,
				person.Komentarze,
				person.Link_Do_Profilu,
				person.Miejscowosc,
				person.Pozostale_Jezyki,
				person.Relokacja,
				person.Rozmowa_nietechniczna,
				person.Rozmowa_techniczna,
				person.Specjalnosc,
				person.Status_Zainteresowany,
				person.Technologie,
				person.Telefon,
				person.Wym_Finansowe,
				person.Data_kontaktu,
				person.Wiek,
			);
		},
		deletePerson(candidate: Person) {
			this.poscik(candidate._id);
			this.showModalDelete = !this.showModalDelete;
			this.getAllPerson();
			setTimeout(() => {
				this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem + 9);
			}, 1000);
		},
		async poscik(id: String) {
			await Axios.delete(`http://localhost:8080/kandydaci/${id}`, {
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((res) => {
					console.log(res, "res udało sie delete");
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm");
				});
		},
		readFileAsString(e: any) {
			const file = e.target.files[0];
			const reader = new FileReader();
			reader.onload = (e) => {
				this.uploadTextFile = String(e.target?.result);
				return this.uploadTextFile;
			};
			reader.readAsText(file);
		},
		csvJSON(text: string, headers: any[], quoteChar = '"', delimiter = ";") {
			const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, "gs");

			const match = (line: any) => {
				const matches = [...line.matchAll(regex)].map((m) => m[2]);
				matches.pop(); // cut off blank match at the end
				return matches;
			};

			const lines = text.split("\n");
			const heads = headers ?? match(lines.shift());

			const readyData = lines.map((line) => {
				return match(line).reduce((acc, cur, i) => {
					// Attempt to parse as a number; replace blank matches with `null`
					const val = cur.length <= 0 ? "" : Number(cur) || cur;
					const key = heads[i] ?? `extra_${i}`;
					return { ...acc, [key]: val };
				}, {});
			});
			readyData.shift();
			readyData.pop();
			return readyData;
		},
		importWorker() {
			let dataUpload;
			const headers: Array<string> = [
				"Angielski",
				"Data_kontaktu",
				"Doswiadczenie",
				"Email",
				"Firmy_Wspolpraca",
				"Imie",
				"Komentarze",
				"Link_Do_Profilu",
				"Miejscowosc",
				"Nazwisko",
				"Niemiecki",
				"Pozostale_Jezyki",
				"Relokacja",
				"Rozmowa_nietechniczna",
				"Rozmowa_techniczna",
				"Specjalnosc",
				"Status_Zainteresowany",
				"Technologie",
				"Telefon",
				"Widelki",
				"Wiek",
			];
			if (this.basic[0]) {
				if ((<any>this.basic[0]).name.includes(".csv")) {
					dataUpload = this.csvJSON(this.uploadTextFile, headers);
				}
				if ((<any>this.basic[0]).name.includes(".json")) {
					dataUpload = JSON.parse(this.uploadTextFile);
				}
			}
			return dataUpload;
		},
		async createMany() {
			const bodyData = this.importWorker();
			const config = {
				method: "post",
				url: `http://localhost:8080/kandydaci/kandydaci/`,
				headers: {
					"Content-Type": "application/json",
				},
				data: bodyData,
			};
			await Axios(config)
				.then((res) => {
					console.log(res, "res udało sie createMany");
					alert(res.statusText);
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm createMany");
					alert(err.response.data.message);
				});
			this.basic = [];
		},
		selectEnglish(arg: any): void {
			if (arg.objectArr.length == 5) {
				this.angielskia2 = "A2";
				this.angielskib1 = "B1";
				this.angielskib2 = "B2";
				this.angielskic1 = "C1";
				this.angielskic2 = "C2";
			}
			if (arg.objectArr.length == 4) {
				this.angielskia2 = "B";
				this.angielskib1 = "B1";
				this.angielskib2 = "B2";
				this.angielskic1 = "C1";
				this.angielskic2 = "C2";
			}
			if (arg.objectArr.length == 3) {
				this.angielskia2 = "B2";
				this.angielskib1 = "B2";
				this.angielskib2 = "B2";
				this.angielskic1 = "C1";
				this.angielskic2 = "C2";
			}
			if (arg.objectArr.length == 2) {
				this.angielskia2 = "C";
				this.angielskib1 = "C";
				this.angielskib2 = "C";
				this.angielskic1 = "C1";
				this.angielskic2 = "C2";
			}
			if (arg.objectArr.length == 1) {
				this.angielskia2 = "C2";
				this.angielskib1 = "C2";
				this.angielskib2 = "C2";
				this.angielskic1 = "C2";
				this.angielskic2 = "C2";
			}
			if (arg.objectArr.length == 0) {
				this.angielskia2 = "";
				this.angielskib1 = "";
				this.angielskib2 = "";
				this.angielskic1 = "";
				this.angielskic2 = "";
			}
		},
		selectGerman(arg: any): void {
			if (arg.objectArr.length == 5) {
				this.niemieckia2 = "A2";
				this.niemieckib1 = "B1";
				this.niemieckib2 = "B2";
				this.niemieckic1 = "C1";
				this.niemieckic2 = "C2";
			}
			if (arg.objectArr.length == 4) {
				this.niemieckia2 = "B";
				this.niemieckib1 = "B1";
				this.niemieckib2 = "B2";
				this.niemieckic1 = "C1";
				this.niemieckic2 = "C2";
			}
			if (arg.objectArr.length == 3) {
				this.niemieckia2 = "B2";
				this.niemieckib1 = "B2";
				this.niemieckib2 = "B2";
				this.niemieckic1 = "C1";
				this.niemieckic2 = "C2";
			}
			if (arg.objectArr.length == 2) {
				this.niemieckia2 = "C1";
				this.niemieckib1 = "C1";
				this.niemieckib2 = "C1";
				this.niemieckic1 = "C1";
				this.niemieckic2 = "C2";
			}
			if (arg.objectArr.length == 1) {
				this.niemieckia2 = "C2";
				this.niemieckib1 = "C2";
				this.niemieckib2 = "C2";
				this.niemieckic1 = "C2";
				this.niemieckic2 = "C2";
			}
			if (arg.objectArr.length == 0) {
				this.niemieckia2 = "";
				this.niemieckib1 = "";
				this.niemieckib2 = "";
				this.niemieckic1 = "";
				this.niemieckic2 = "";
			}
		},
		displayPage(od: any, dok: any) {
			this.resultDisplay = this.result.slice(od, dok);
		},
		addClass(index: any): string {
			let aaa = this.a;
			if (index == aaa) {
				aaa = aaa + 6;
				return "green";
			} else if (Number(index) % 2 == 1) {
				return "white";
			} else {
				return "black";
			}
		},
		handleSubmit(e: any): void {
			alert("-- form submit --");
		},
		async getAllPerson() {
			const params = new Params(
				this.nazwisko.trim(),
				"",
				this.miejscowosc.trim(),
				this.specjalnosc.trim(),
				[],
				this.adobe ? "adobe" : "",
				this.agile ? "agile" : "",
				this.android ? "android" : "",
				this.angular ? "angular" : "",
				this.aws ? "aws" : "",
				this.bash ? "bash" : "",
				this.bootstrap ? "bootstrap" : "",
				this.css ? "css" : "",
				this.csharp ? "c#" : "",
				this.cpp ? "c\/++" : "",
				this.c ? "c" : "",
				this.delphi ? "delphi" : "",
				this.html ? "html" : "",
				this.ios ? "ios" : "",
				this.java ? "java" : "",
				this.javascript ? "javascript" : "",
				this.jQuery ? "jQuery" : "",
				this.kanban ? "kanban" : "",
				this.less ? "less" : "",
				this.linux ? "linux" : "",
				this.dotNet ? ".net" : "",
				this.node ? "node" : "",
				this.oracle ? "oracle" : "",
				this.perl ? "perl" : "",
				this.photoshop ? "photoshop" : "",
				this.php ? "php" : "",
				this.powershell ? "powershell" : "",
				this.python ? "python" : "",
				this.react ? "react" : "",
				this.ruby ? "ruby" : "",
				this.sass ? "sass" : "",
				this.scala ? "scala" : "",
				this.scrum ? "scrum" : "",
				this.spring ? "spring" : "",
				this.sql ? "sql" : "",
				this.scss ? "scss" : "",
				this.swift ? "swift" : "",
				this.vue ? "vue" : "",
				this.vb ? "vb" : "",
				this.windows ? "windows" : "",
				this.angielski ? "Angielski" : "",
				this.angielskia2,
				this.angielskib1,
				this.angielskib2,
				this.angielskic1,
				this.angielskic2,
				this.niemiecki ? "Niemiecki" : "",
				this.niemieckia2,
				this.niemieckib1,
				this.niemieckib2,
				this.niemieckic1,
				this.niemieckic2,
				this.pozostaleJezyki,
			);
			// const params = {
			// 	surname: this.nazwisko.trim(),
			// 	firstname: "",
			// 	locality: this.miejscowosc.trim(),
			// 	specjalization: this.specjalnosc.trim(),
			// 	arrayTechnologies: [],

			// 	adobe: this.adobe ? "adobe" : "",
			// 	agile: this.agile ? "agile" : "",
			// 	android: this.android ? "android" : "",
			// 	angular: this.angular ? "angular" : "",
			// 	aws: this.aws ? "aws" : "",
			// 	bash: this.bash ? "bash" : "",
			// 	bootstrap: this.bootstrap ? "bootstrap" : "",
			// 	css: this.css ? "css" : "",
			// 	csharp: this.csharp ? "c#" : "",
			// 	cpp: this.cpp ? "c\/++" : "",
			// 	c: this.c ? "c" : "",
			// 	delphi: this.delphi ? "delphi" : "",
			// 	html: this.html ? "html" : "",
			// 	ios: this.ios ? "ios" : "",
			// 	java: this.java ? "java" : "",
			// 	javascript: this.javascript ? "javascript" : "",
			// 	jQuery: this.jQuery ? "jQuery" : "",
			// 	kanban: this.kanban ? "kanban" : "",
			// 	less: this.less ? "less" : "",
			// 	linux: this.linux ? "linux" : "",
			// 	dotNet: this.dotNet ? ".net" : "",
			// 	node: this.node ? "node" : "",
			// 	oracle: this.oracle ? "oracle" : "",
			// 	perl: this.perl ? "perl" : "",
			// 	photoshop: this.photoshop ? "photoshop" : "",
			// 	php: this.php ? "php" : "",
			// 	powershell: this.powershell ? "powershell" : "",
			// 	python: this.python ? "python" : "",
			// 	react: this.react ? "react" : "",
			// 	ruby: this.ruby ? "ruby" : "",
			// 	sass: this.sass ? "sass" : "",
			// 	scala: this.scala ? "scala" : "",
			// 	scrum: this.scrum ? "scrum" : "",
			// 	spring: this.spring ? "spring" : "",
			// 	sql: this.sql ? "sql" : "",
			// 	scss: this.scss ? "scss" : "",
			// 	swift: this.swift ? "swift" : "",
			// 	vue: this.vue ? "vue" : "",
			// 	vb: this.vb ? "vb" : "",
			// 	windows: this.windows ? "windows" : "",

			// 	angielski: this.angielski ? "Angielski" : "",
			// 	angielskia2: this.angielskia2,
			// 	angielskib1: this.angielskib1,
			// 	angielskib2: this.angielskib2,
			// 	angielskic1: this.angielskic1,
			// 	angielskic2: this.angielskic2,
			// 	niemiecki: this.niemiecki ? "Niemiecki" : "",
			// 	niemieckia2: this.niemieckia2,
			// 	niemieckib1: this.niemieckib1,
			// 	niemieckib2: this.niemieckib2,
			// 	niemieckic1: this.niemieckic1,
			// 	niemieckic2: this.niemieckic2,
			// 	pozostaleJezyki: this.pozostaleJezyki,
			// };

			await Axios.get(`http://localhost:8080/kandydaci`, { params })
				.then((res) => {
					this.result = res.data;
					console.log(res.data)

					this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem + 9);
				})
				.catch((err) => {
					console.log(err, "error getAllPerson()");
					console.error(err.message);
				});
		},
	},
});
</script>

<template>
	<div class="nameColumnResult row formRecruter" id="formRecruter">
		<div class="col-12 wiersz1 p-0 p-lg-3">
			<div class="row kolumna1">
				<div class="col-12 col-md-9 p-0 px-lg-3">
					<div class="row formSearch">
						<div class="col-sm-6">
							<va-input
								class="mt-2 wrapperInput"
								v-model="nazwisko"
								label="Wpisz nazwisko:"
								input-class="inputClass"
							/>

							<va-input
								class="mt-2 wrapperInput"
								v-model="specjalnosc"
								type="text"
								label="Wpisz Specjalność:"
								input-class="inputClass"
							/>
							<va-input
								class="mt-2 wrapperInput"
								v-model="miejscowosc"
								type="text"
								label="Wpisz Miejscowość:"
								input-class="inputClass"
							/>
						</div>

						<div class="col-sm-6">
							<div class="jezyki">
								<div class="block my-2 d-flex d-flex justify-content-between">
									<div class="englishCheck">
										<input type="checkbox" id="angielski" v-model="angielski" />
										<label for="angielski">Angielski</label>
									</div>
									<div class="w-50 pl-2">
										<VueMultiselect
											v-model="englishLevel"
											:options="myLevel"
											:close-on-select="true"
											:clear-on-select="false"
											:hideSelected="true"
											:show-labels="false"
											label="level"
											track-by="level"
											@close="selectEnglish(englishLevel)"
										></VueMultiselect>
									</div>
								</div>
								<div class="block mb-2 d-flex d-flex justify-content-between">
									<div class="englishCheck">
										<input type="checkbox" id="niemiecki" v-model="niemiecki" />
										<label for="niemiecki">Niemiecki</label>
									</div>
									<div class="w-50 pl-2">
										<VueMultiselect
											v-model="germanLevel"
											:options="myLevel"
											:close-on-select="true"
											:clear-on-select="false"
											:hideSelected="true"
											:show-labels="false"
											label="level"
											track-by="level"
											@close="selectGerman(germanLevel)"
										></VueMultiselect>
									</div>
								</div>
							</div>
							<div class="block mb-1">
								<va-input
									class="mt-2 wrapperInput"
									v-model="pozostaleJezyki"
									type="text"
									label="Wpisz inny język:"
									input-class="inputClass"
								/>
							</div>
						</div>

						<div class="col-sm-12 technologie mt-3">
							<div class="row">
								<div class="col-4 col-md-2 p-0">
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="adobe"
											label="Adobe"
											title="Adobe"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="agile"
											label="Agile"
											title="Agile"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="android"
											label="Android"
											title="Android"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="angular"
											label="Angular"
											title="Angular"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="aws"
											label="AWS"
											title="AWS"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="bash"
											label="Bash"
											title="Bash"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="bootstrap"
											label="Bootstrap"
											title="Bootstrap"
											checked-icon="playlist_add_check"
										/>
									</div>
								</div>
								<div class="col-4 col-md-2 p-0">
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="css"
											label="CSS"
											title="CSS"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="csharp"
											label="C#"
											title="C#"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="cpp"
											label="C++"
											title="C++"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="c"
											label="C"
											title="C"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="delphi"
											label="Delphi"
											title="Delphi"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="html"
											label="HTML"
											title="HTML"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="ios"
											label="IOS"
											title="IOS"
											checked-icon="playlist_add_check"
										/>
									</div>
								</div>
								<div class="col-4 col-md-2 p-0">
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="java"
											label="JAVA"
											title="JAVA"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="javascript"
											label="JavaScript"
											title="JavaScript"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="jQuery"
											label="jQuery"
											title="jQuery"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="kanban"
											label="Kanban"
											title="Kanban"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="less"
											label="Less"
											title="Less"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="linux"
											label="Linux"
											title="Linux"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="dotNet"
											label=".NET"
											title=".NET"
											checked-icon="playlist_add_check"
										/>
									</div>
								</div>
								<div class="col-4 col-md-2 p-0">
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="node"
											label="Node.js"
											title="Node.js"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="oracle"
											label="Oracle"
											title="Oracle"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="perl"
											label="Perl"
											title="Perl"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="photoshop"
											label="Photoshop"
											title="Photoshop"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="php"
											label="PHP"
											title="PHP"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="powershell"
											label="Powershell"
											title="Powershell"
											checked-icon="playlist_add_check"
										/>
									</div>
								</div>
								<div class="col-4 col-md-2 p-0">
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="python"
											label="Python"
											title="Python"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="react"
											label="React"
											title="React"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="ruby"
											label="Ruby"
											title="Ruby"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="sass"
											label="Sass"
											title="Sass"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="scala"
											label="Scala"
											title="Scala"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="scrum"
											label="Scrum"
											title="Scrum"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="spring"
											label="Spring"
											title="Spring"
											checked-icon="playlist_add_check"
										/>
									</div>
								</div>

								<div class="col-4 col-md-2 p-0">
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="sql"
											label="SQL/MySQL"
											title="SQL/MySQL"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="scss"
											label="Scss"
											title="Scss"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="swift"
											label="Swift"
											title="Swift"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="vue"
											label="Vue"
											title="Vue"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="vb"
											label="VB/VBA"
											title="VB/VBA"
											checked-icon="playlist_add_check"
										/>
									</div>
									<div class="block mb-1">
										<va-checkbox
											color="#9c27b0"
											v-model="windows"
											label="Windows"
											title="Windows"
											checked-icon="playlist_add_check"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-3 colDodajKandydata mt-2">
					<div class="createPerson">
						<va-button type="submit" @click="showPersonCreate()"
							>Dodaj kandydata</va-button
						>
					</div>
					<div class="upload createPerson">
						<va-file-upload
							v-model="basic"
							upload-button-text="Dodaj plik"
							file-types="json, csv"
							@input="readFileAsString"
						/>

						<div class="zapisz">
							<va-button @click="createMany()">Zapisz dane</va-button>
						</div>
						<div class="zapisz">
							<va-button type="submit" class="mt-2" @click="getAllPerson()">
								Pobierz dane
							</va-button>
						</div>
					</div>
				</div>
			</div>
			<div class="row resultPersons" v-show="result.length > 0">
				<div class="my-3 d-flex justify-content-center">
					<!-- <va-pagination
						:visible-pages="7"
						v-model="valueCurrentStartItem"
						:total="result.length"
						boundary-numbers
						:page-size="9"
						@update:model-value="
							displayPage(valueCurrentStartItem - 1, valueCurrentStartItem + 8)
						"
						:direction-links="false"
						:hide-on-single-page="true"
						size="small"
						class="paginationTop"
					/> -->
					<va-pagination
						:visible-pages="7"
						v-model="valueCurrentStartItem"
						:total="result.length"
						boundary-numbers
						:page-size="9"
						@update:model-value="
							displayPage(valueCurrentStartItem - 1, valueCurrentStartItem + 8)
						"
						:hide-on-single-page="true"
						direction-icon-left="keyboard_double_arrow_left"
						direction-icon-right="keyboard_double_arrow_right"
						size="small"
						class="paginationBottom"
					/>
				</div>
				<div
					class="persons col-12 col-sm-6 col-lg-4 p-3 d-flex flex-column"
					:class="addClass(index)"
					v-for="(person, index) in resultDisplay"
					:key="index"
				>
					<div class="dane" v-show="resultDisplay.length > 0">
						<div class="info name mb-2">
							{{ person["Imie"] }} {{ person["Nazwisko"] }}
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							EMAIL:
							<p>{{ person["Email"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							TELEFON:
							<p>{{ person["Telefon"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							MIEJSCOWOŚĆ:
							<p>{{ person["Miejscowosc"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							ANGIELSKI:
							<p>{{ person["Angielski"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							NIEMIECKI:
							<p>{{ person["Niemiecki"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							INNE JĘZYKI:
							<p>{{ person["Pozostale_Jezyki"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							WIEK:
							<p>{{ person["Wiek"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							RELOKACJA:
							<p>{{ person["Relokacja"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							WSPÓŁPRACA Z FIRMAMI:
							<p>{{ person["Firmy_Wspolpraca"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							DOŚWIADCZENIE:
							<p>{{ person["Doswiadczenie"] }} lat</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							WYMAGANIA FINANOSOWE:
							<p>{{ person["Widelki"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							TECHNOLOGIE:
							<p>{{ person["Technologie"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							KOMENTARZE:
							<p>{{ person["Komentarze"] }}</p>
						</div>
						<div class="info linkedin mb-1 d-flex justify-content-between">
							LINKEDIN:
							<p>
								<a :href="person['Link_Do_Profilu']">{{
									person["Link_Do_Profilu"]
								}}</a>
							</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							SPECJALNOŚĆ:
							<p>{{ person["Specjalnosc"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							OSTATNI KONTAKT:
							<p v-if="person['Data_kontaktu'] != '' ">{{ new Date(person["Data_kontaktu"]).toLocaleDateString('pl-PL') }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							STATUS:
							<p>{{ person["Status_Zainteresowany"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							Rozmowa techniczna:
							<p>{{ person["Rozmowa_techniczna"] }}</p>
						</div>
						<div class="info mb-1 d-flex justify-content-between">
							Rozmowa nietechniczna:
							<p>{{ person["Rozmowa_nietechniczna"] }}</p>
						</div>
					</div>

					<div class="d-flex mt-auto justify-content-between">
						<div class="colForm editUser">
							<va-button
								@click="showPersonEdit(person)"
								:rounded="false"
								class="btn btn-outline-secondary editPerson"
							>
								Edytuj
							</va-button>
						</div>
						<!-- <va-button :rounded="false" :gradient="true" color="warning">Green text</va-button> -->
						<div class="colForm editUser">
							<va-button
								@click="showPersonDelete(person)"
								class="btn btn-outline-secondary deletePerson"
								:candidate="person"
								>Usuń</va-button
							>
						</div>
					</div>
				</div>
				<div class="my-3 d-flex justify-content-center">
					<va-pagination
						:visible-pages="7"
						v-model="valueCurrentStartItem"
						:total="result.length"
						boundary-numbers
						:page-size="9"
						@update:model-value="
							displayPage(valueCurrentStartItem - 1, valueCurrentStartItem + 8)
						"
						:hide-on-single-page="true"
						direction-icon-left="keyboard_double_arrow_left"
						direction-icon-right="keyboard_double_arrow_right"
						size="small"
						class="paginationBottom"
					/>
				</div>
			</div>
		</div>

		<!-- <va-modal
			v-model="showModalDelete"
			hide-default-actions
			:blur="false"
		>
			<template #header>
				<h2 v-if="candidate!=null">Czy jesteś pewien że chcesz usunąć {{candidate.Nazwisko}} {{candidate.Imie}}</h2>
			</template>
			<div>{{ candidate._id }}</div>{{candidate}}
			<template #footer>
				<va-button
					@click="deletePerson(candidate)"
				>
					Custom action
				</va-button>
			</template>
		</va-modal> -->
		<EditPerson
			:person="candidate"
			:showModalEdit="showModalEdit"
			:dateLastContactExist="candidate['Data_kontaktu'] != ''"
			@closeEditModal="closeEdit()"
			@successEdit="successEdit()"
		>
		</EditPerson>
		<CreatePerson
			:showModalCreate="showModalCreate"
			@closeCreateModal="closeCreate()"
			@successCreate="successCreate()"
		>
		</CreatePerson>
		<DeletePerson
			:person="candidate"
			:showModalDelete="showModalDelete"
			@closeDeleteModal="closeDelete()"
			@successDelete="successDelete()"
		>
		</DeletePerson>
	</div>
</template>

<style lang="scss">
.editPerson,
.deletePerson {
	font-size: 14px !important;
	min-height: 42px !important;
	height: 42px !important;
}
</style>
