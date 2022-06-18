<script lang="ts">
import { createApp, defineComponent } from 'vue';
import Axios from "axios";
import lodash from 'lodash';
import VueMultiselect from "vue-multiselect";
import EditPerson from "./EditPerson.vue"
import { Person } from "../classess/person";

export default defineComponent({
	name: "FormRecruter",
	props: {
		msg: String,
	},
	components: {
		VueMultiselect,
		EditPerson
	},
	data() {
		return {
			userik: new Person(),

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

			basic: [],//upload file
			nazwisko: '',
			specjalnosc: '',
			miejscowosc: '',

			angielski: false,
			angielskia2: '',
			angielskib1: '',
			angielskib2: '',
			angielskic1: '',
			angielskic2: '',

			niemiecki: false,
			niemieckia2: "",
			niemieckib1: "",
			niemieckib2: "",
			niemieckic1: "",
			niemieckic2: "",

			pozostaleJezyki: '',
			result: [],
			resultDisplay:[],

			a: 4,
			valueCurrentStartItem: 0,
			arrayTechnologies: [],
			englishLevel: '',
			germanLevel: '',
			myLevel: [
				{
					level: "Clear",
					objectArr: []
				},
				{
					level: "A2",
					objectArr: ["A2", "B1", "B2", "C1", "C2"]
				},
				{
					level: "B1",
					objectArr: ["B1", "B2", "C1", "C2"]
				},
				{
					level: "B2",
					objectArr: ["B2", "C1", "C2"]
				},
				{
					level: "C1",
					objectArr: ["C1", "C2"]
				},
				{
					level: "C2",
					objectArr: ["C2"]
				},
			],

			//MODAL FULL
			showModal: false,
			showModalDelete: false,
      		message: 'jakiś tekst',
		}
	},
	async created() {
		// console.log(this)
		// this.angielskia2 ="";
		// this.angielskib1 ="";
		// this.angielskib2 ="";
		// this.angielskic1 ="";
		// this.angielskic2 = "";
		await this.getAllPerson('');
		setTimeout(() => {
			this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem+9);
		}, 1000);
		// this.niemieckia2 ="A2";
		// this.niemieckib1 ="B1";
		// this.niemieckib2 ="B2";
		// this.niemieckic1 ="C1";
		// this.niemieckic2 ="C2";
	},
	methods: {
		showUser(person: any) { 
			this.showModalDelete = !this.showModalDelete
			this.userik = new Person(
				person._id,
				person.Imie,
				person.Nazwisko
			)
		},
		editPerson(userik: Person) {
			
		},
		deletePerson(userik: Person) { 
			this.poscik(userik._id);
			this.showModalDelete = !this.showModalDelete
			this.getAllPerson('');
			setTimeout(() => {
				this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem+9);
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
		selectEnglish(arg: any):void {
			if (arg.objectArr.length == 5) {
				this.angielskia2 ="A2";
				this.angielskib1 ="B1";
				this.angielskib2 ="B2";
				this.angielskic1 ="C1";
				this.angielskic2 ="C2";
			}
			if (arg.objectArr.length == 4) { 
				this.angielskia2 ="B";
				this.angielskib1 ="B1";
				this.angielskib2 ="B2";
				this.angielskic1 ="C1";
				this.angielskic2 ="C2";
			}
			if (arg.objectArr.length == 3) { 
				this.angielskia2 ="B2";
				this.angielskib1 ="B2";
				this.angielskib2 ="B2";
				this.angielskic1 ="C1";
				this.angielskic2 ="C2";
			}
			if (arg.objectArr.length == 2) { 
				this.angielskia2 ="C";
				this.angielskib1 = "C";
				this.angielskib2 ="C";
				this.angielskic1 ="C1";
				this.angielskic2 ="C2";
			}
			if (arg.objectArr.length == 1) { 
				this.angielskia2 ="C2";
				this.angielskib1 = "C2";
				this.angielskib2 = "C2";
				this.angielskic1 ="C2";
				this.angielskic2 ="C2";
			}
			if (arg.objectArr.length == 0) { 
				this.angielskia2 ="";
				this.angielskib1 ="";
				this.angielskib2 ="";
				this.angielskic1 ="";
				this.angielskic2 ="";
			}
		},
		selectGerman(arg: any):void {
			if (arg.objectArr.length == 5) {
				this.niemieckia2 ="A2";
				this.niemieckib1 ="B1";
				this.niemieckib2 ="B2";
				this.niemieckic1 ="C1";
				this.niemieckic2 ="C2";
			}
			if (arg.objectArr.length == 4) { 
				this.niemieckia2 ="B";
				this.niemieckib1 ="B1";
				this.niemieckib2 ="B2";
				this.niemieckic1 ="C1";
				this.niemieckic2 ="C2";
			}
			if (arg.objectArr.length == 3) { 
				this.niemieckia2 ="B2";
				this.niemieckib1 ="B2";
				this.niemieckib2 ="B2";
				this.niemieckic1 ="C1";
				this.niemieckic2 ="C2";
			}
			if (arg.objectArr.length == 2) { 
				this.niemieckia2 ="C";
				this.niemieckib1 = "C";
				this.niemieckib2 ="C";
				this.niemieckic1 ="C1";
				this.niemieckic2 ="C2";
			}
			if (arg.objectArr.length == 1) { 
				this.niemieckia2 ="C2";
				this.niemieckib1 = "C2";
				this.niemieckib2 = "C2";
				this.niemieckic1 ="C2";
				this.niemieckic2 ="C2";
			}
			if (arg.objectArr.length == 0) { 
				this.niemieckia2 ="";
				this.niemieckib1 ="";
				this.niemieckib2 ="";
				this.niemieckic1 ="";
				this.niemieckic2 ="";
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
				return "white"
			} else {
				return "black";
			}
		},
		handleSubmit(e: any): void {
			alert('-- form submit --')
		},
		getAllPerson(arg: any) {
			const params = {
				surname: this.nazwisko,
				firstname: '',
				locality: this.miejscowosc,
				specjalization: this.specjalnosc,
				arrayTechnologies: [],

				adobe: this.adobe ? 'adobe' : '',
				agile: this.agile ? 'agile': '',
				android: this.android ? 'android' : '',
				angular: this.angular ? 'angular': '',
				aws: this.aws ? "aws" : '',
				bash: this.bash ? "bash" : '',
				bootstrap: this.bootstrap ? 'bootstrap' : '',
				css: this.css ? 'css' : '',
				csharp: this.csharp ? 'c#': '',
				cpp: this.cpp ? 'c\/++' : "",
				c: this.c ? "c" : '',
				delphi: this.delphi ? 'delphi': '',
				html: this.html ? 'html': '',
				ios: this.ios ? 'ios': '',
				java: this.java ? 'java,' : '',
				java1: this.java ? 'java ' : '',
				javascript: this.javascript ? 'javascript' : '',
				jQuery: this.jQuery ? 'jQuery' : '',
				kanban: this.kanban ? 'kanban' : '',
				less: this.less ? 'less' : '',
				linux: this.linux ? 'linux' : '',
				dotNet: this.dotNet ? '.net' : '',
				node: this.node ? 'node' : '',
				oracle: this.oracle ? 'oracle' : '',
				perl: this.perl ? 'perl' : '',
				photoshop: this.photoshop ? 'photoshop' : '',
				php: this.php ? 'php' : '',
				powershell: this.powershell ? 'powershell' : '',
				python: this.python ? 'python' : '',
				react: this.react ? 'react' : '',
				ruby: this.ruby ? 'ruby' : '',
				sass: this.sass ? 'sass' : '',
				scala: this.scala ? 'scala' : '',
				scrum: this.scrum ? 'scrum' : '',
				spring: this.spring ? 'spring' : '',
				sql: this.sql ? 'sql' : '',
				scss: this.scss ? 'scss' : '',
				swift: this.swift ? 'swift' : '',
				vue: this.vue ? 'vue' : '',
				vb: this.vb ? 'vb' : '',
				windows: this.windows ? 'windows' : '',

				angielski: this.angielski ? "Angielski" : "",
				angielskia2: this.angielskia2,
				angielskib1: this.angielskib1,
				angielskib2: this.angielskib2,
				angielskic1: this.angielskic1,
				angielskic2: this.angielskic2,
				niemiecki: this.niemiecki ? "Niemiecki" : '',
				niemieckia2: this.niemieckia2,
				niemieckib1: this.niemieckib1,
				niemieckib2: this.niemieckib2,
				niemieckic1: this.niemieckic1,
				niemieckic2: this.niemieckic2,
				pozostaleJezyki: this.pozostaleJezyki,
			};
			Axios.get(`http://localhost:8080/kandydaci`, {params})
				.then((res) => {
					console.log(res, "res udało sie get");
					this.result = res.data;
					this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem+9);
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm getik");
				});
		},
	}
});
</script>

<template>
	<div class="nameColumnResult row">
		<div class="col-12 wiersz1">
			<div class="row kolumna1">
				<div class="col-md-9">
					<va-form
						class="row"
						tag="form"
						@submit.prevent="handleSubmit"
					>
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
									<div class="">
										<input
											type="checkbox"
											id="angielski"
											v-model="angielski"
										/>
										<label for="angielski">Angielski</label>
									</div>
									<div class="w-50">
										<!-- <input
											type="text"
											name="angielskiLevel"
											id="angielskiLevel"
											style="width: 50px"
										/> -->
										<VueMultiselect
											v-model="englishLevel"
											:options="myLevel"
											:close-on-select="true"
											:clear-on-select="true"
											:hideSelected="true"
											:show-labels="false"
											:placeholder="'A2+'"
											label="level"
											track-by="level"
											@close="selectEnglish(englishLevel)"
										></VueMultiselect>
									</div>
									
								</div>
								<div class="block mb-2 d-flex d-flex justify-content-between">
									<div class="">
										<input
											type="checkbox"
											id="niemiecki"
											v-model="niemiecki"
										/>
										<label for="niemiecki">Niemiecki</label>
									</div>
									<div class="w-50">
										<!-- <input
											type="text"
											name="niemieckiLevel"
											id="niemieckiLevel"
											style="width: 50px"
										/> -->
										<VueMultiselect
											v-model="germanLevel"
											:options="myLevel"
											:close-on-select="true"
											:clear-on-select="false"
											:hideSelected="true"
											:show-labels="false"
											:placeholder="'A1+'"
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
								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="adobe"
										label="Adobe"
										checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="agile"
										label="Agile" checked-icon="playlist_add_check" />
										<!-- <div class="w-50">
											<input
												type="checkbox"
												id="agile"
												name="agile"
												value="agile"
												defaultChecked="false"
											/>
											<label for="agile">Agile</label>
										</div> -->
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="android"
										label="Android" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="angular" label="Angular" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="aws" label="AWS" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="bash" label="Bash" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="bootstrap" label="Bootstrap" checked-icon="playlist_add_check" />
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="css" label="CSS" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="csharp" label="C#" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="cpp" label="C++" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="c" label="C" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="delphi" label="Delphi" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="html" label="HTML" checked-icon="playlist_add_check" />
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="ios" label="IOS" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="java" label="JAVA" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="javascript" label="JavaScript" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="jQuery" label="jQuery" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="kanban" label="Kanban" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="less" label="Less" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="linux" label="Linux" checked-icon="playlist_add_check" />
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="dotNet" label=".NET" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="node" label="Node.js" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="oracle" label="Oracle" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="perl" label="Perl" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="photoshop" label="Photoshop" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="php" label="PHP" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="powershell" label="Powershell" checked-icon="playlist_add_check" />
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="python" label="Python" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="react" label="React" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="ruby" label="Ruby" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="sass" label="Sass" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="scala" label="Scala" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="scrum" label="Scrum" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="spring" label="Spring" checked-icon="playlist_add_check" />
									</div>
								</div>

								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="sql" label="SQL/MySQL" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="scss" label="Scss" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="swift" label="Swift" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="vue" label="Vue" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="vb" label="VB/VBA" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="windows" label="Windows" checked-icon="playlist_add_check" />
									</div>
								</div>
							</div>

							
							<va-button 
								type="submit" 
								class="mt-2"
							 	@click="getAllPerson('')"
							>
								Pobierz
							</va-button>
						</div>
					</va-form>
					<!-- <form class="row" action="/wyslijimie" method="get"></form> -->
				</div>
				<div class="col-md-3 colDodajKandydata mt-2">
					<form class="row" action="/addedToDatabase" method="post">
						<va-button
							type="submit"
						>Dodaj kandydata</va-button>
					</form>
					<form
						method="POST"
						action="/upload-file"
						enctype="multipart/form-data"
						class="upload"
					>
						<va-file-upload 
							v-model="basic"
							upload-button-text="Dodaj plik.json"
							file-types="json, csv"
						/>
						<!-- <div class="fileUpload">
							<label for="file" class="btn btn-primary">Dodaj plik .json</label>
							<input
								id="file"
								type="file"
								name="my_file_upload"
								class="btn btn-primary"
							/>
						</div> -->
						<div class="zapisz">
							<va-button type="submit">Zapisz plik .json</va-button>
						</div>
					</form>
				</div>
			</div>
			<div class="row resultPersons" v-show="result.length > 0">
			<div class="my-3 d-flex justify-content-center">
				<va-pagination
					:visible-pages="7"
					v-model="valueCurrentStartItem"
					:total="result.length"
					boundary-numbers
					:page-size="9"
					@update:model-value="displayPage(valueCurrentStartItem-1, valueCurrentStartItem+8)"
					:direction-links="false"
					:hide-on-single-page="true"
					size="small"
					class="paginationTop"
					/>
				</div>
				<div class="persons col-12 col-sm-6 col-lg-4 p-3" :class="addClass(index)" v-for="(person, index) in resultDisplay" :key="index">
					<div  class="dane" v-show="resultDisplay.length > 0">
						<!-- <div class="info">Id: {{person["_id"] }}</div> -->
						<div class="info name mb-2">{{person["Imie"]}} {{person["Nazwisko"]}}</div>
						<div class="info mb-1 d-flex justify-content-between">
							
							EMAIL: 
							<p>{{person["Email"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">TELEFON: <p>{{person["Telefon"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">MIEJSCOWOŚĆ: <p>{{person["Miejscowosc"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">ANGIELSKI: <p>{{person["Angielski"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">NIEMIECKI: <p>{{person["Niemiecki"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">INNE JĘZYKI: <p>{{person["Pozostale_Jezyki"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">WIEK: <p> {{person["Wiek"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">RELOKACJA: <p>{{person["Relokacja"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">WSPÓŁPRACA Z FIRMAMI: <p>{{person["Firmy_Wspolpraca"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">DOŚWIADCZENIE: <p>{{person["Doswiadczenie"]}} lat</p></div>
						<div class="info mb-1 d-flex justify-content-between">WYMAGANIA FINANOSOWE: <p>{{person["Wym_Finansowe"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">TECHNOLOGIE: <p>{{person["Technologie"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">KOMENTARZE: <p>{{person["Komentarze"]}}</p></div>
						<div class="info linkedin mb-1 d-flex justify-content-between">LINKEDIN: 
							<p>
								<a :href="person['Link_Do_Profilu']">{{person["Link_Do_Profilu"]}}</a>
							</p>
						</div> 
						<div class="info mb-1 d-flex justify-content-between">SPECJALNOŚĆ: <p>{{person["Specjalnosc"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">OSTATNI KONTAKT: <p>{{person["Data_kontaktu"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">STATUS: <p>{{person["Status_Zainteresowany"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">Rozmowa techniczna: <p>{{person["Rozmowa_techniczna"]}}</p></div>
						<div class="info mb-1 d-flex justify-content-between">Rozmowa nietechniczna: <p>{{person["Rozmowa_nietechniczna"]}}</p></div>
					</div>

					<div class="d-flex justify-content-between">
						<form class="colForm editUser" action="/editUser" method="get">
							<input
								type="checkbox"
								:id="person['_id']"
								name="editUser"
								:value="person['_id']"
								defaultChecked="true"
							/>
							<label :for="person['_id']"></label>
							<!-- <button type="submit" class="btn btn-outline-secondary editPerson">Edytuj</button> -->
							<va-button 
								@click="showModal = !showModal"
								:id="person['_id']"
								:rounded="false"
								class="btn btn-outline-secondary editPerson"
							>
								Edytuj
							</va-button>
							<va-modal v-model="showModal" fullscreen :message="message" hide-default-actions :person="person" />
						</form>
						<!-- <va-button :rounded="false" :gradient="true" color="warning">Green text</va-button> -->
						<form class="colForm" action="/deleteUser" method="get">
							<input
								type="checkbox"
								:id="person['_id']+'1'"
								name="deleteUser"
								:value="person['_id']+'1'"
							/>
							<label :for="person['_id']+'1'"></label>
							<!-- <button type="submit" class="btn btn-outline-secondary deletePerson">
								Usuń z bazy
							</button> -->
							<va-button 
								@click="showUser(person)"
								class="btn btn-outline-secondary deletePerson"
								:userik="person"
							>
								Usuń z bazy
							</va-button>

							<!-- <va-modal
								v-model="showModalDelete"
								hide-default-actions
								:blur="false"
							>
								<template #header>
									<h2>Czy jesteś pewien że chcesz usunąć {{person["Imie"]}} {{person["Nazwisko"]}}</h2>
								</template>
								<div>{{ message }}</div>
								<template #footer>
									<va-button
										@click="deletePerson(person)"
									>
										Custom action
									</va-button>
								</template>
							</va-modal> -->
						</form>
					</div>
				</div>
				<div class="my-3 d-flex justify-content-center">
					<va-pagination
					:visible-pages="7"
					v-model="valueCurrentStartItem"
					:total="result.length"
					boundary-numbers
					:page-size="9"
					@update:model-value="displayPage(valueCurrentStartItem-1, valueCurrentStartItem+8)"
					:hide-on-single-page="true"
					direction-icon-left="keyboard_double_arrow_left"
					direction-icon-right="keyboard_double_arrow_right"
					size="small"
					class="paginationBottom"
					/>
				</div>
			</div>
		</div>
		<EditPerson></EditPerson>
		<va-modal
			v-model="showModalDelete"
			hide-default-actions
			:blur="false"
		>
			<template #header>
				<h2 v-if="userik!=null">Czy jesteś pewien że chcesz usunąć {{userik.Nazwisko}} {{userik.Imie}}</h2>
			</template>
			<div>{{ userik._id }}</div>{{userik}}
			<template #footer>
				<va-button
					@click="deletePerson(userik)"
				>
					Custom action
				</va-button>
			</template>
		</va-modal>
	</div>
</template>

<style lang="scss">

.editPerson,
.deletePerson {
	font-size: 14px!important;
	min-height: 42px!important;
	height: 42px!important;
}
</style>