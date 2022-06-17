<script lang="ts">
import { createApp, defineComponent } from 'vue';
import Axios from "axios";
import lodash from 'lodash';

export default defineComponent({
	name: "FormRecruter",
	props: {
		msg: String,
	},
	data() {
		return {
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
			result: [],
			resultDisplay:[],

			a: 4,
			valueCurrentStartItem: 0,
		}
	},
	async created() {
		console.log(this)
		await this.getAllPerson('');
		setTimeout(() => {
			this.displayPage(this.valueCurrentStartItem, this.valueCurrentStartItem+9);
		}, 1000);
	},
	methods: {
		displayPage(od: any, dok: any) { 
			this.resultDisplay = this.result.slice(od, dok);
		},
		addClass(index: any) {
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
			Axios.get(`http://localhost:8080/kandydaci`)
				.then((res) => {
					console.log(res, "res udało sie get");
					this.result = res.data;
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm getik");
				});
		},
	}
});
</script>

<template>
	<div class="greetings">
		<h1 class="green">{{ msg }}</h1>
		<h3>
			You’ve successfully created a project with
			<a target="_blank" href="https://vitejs.dev/">Vite</a> +
			<a target="_blank" href="https://vuejs.org/">Vue 3</a>. What's next?
		</h3>
	</div>

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
	
							<va-button type="submit" class="mt-2">
								Login
							</va-button>
						</div>

						<div class="col-sm-6 jezyki">
							<div class="block mb-1">
								<div class="w-50">
									<input
										type="checkbox"
										id="angielski"
										name="Angielski"
										value="angielski"
										defaultChecked="false"
									/>
									<label for="angielski">Angielski</label>
								</div>
								<div class="w-50">
									<input
										type="text"
										name="angielskiLevel"
										id="angielskiLevel"
										style="width: 50px"
									/>
								</div>
							</div>
							<div class="block mb-1">
								<div class="w-50">
									<input
										type="checkbox"
										id="niemiecki"
										name="Niemiecki"
										value="niemiecki"
										defaultChecked="false"
									/>
									<label for="niemiecki">Niemiecki</label>
								</div>
								<div class="w-50">
									<input
										type="text"
										name="niemieckiLevel"
										id="niemieckiLevel"
										style="width: 50px"
									/>
								</div>
							</div>
							<div class="block mb-1">
								<div class="w-50">
									<label
										for="pozostalejezyki"
										title="Przykład: 'Rosyjski B1 lub Rosyjski'"
										>Wpisz inny język:
									</label>
								</div>
								<div class="w-50">
									<input
										type="text"
										id="pozostalejezyki"
										name="Pozostale_Jezyki"
										style="width: 100px"
									/>
								</div>
							</div>
						</div>

						<div class="col-sm-12 technologie">
							<div class="row">
								<div class="col-sm-2">
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="adobe" label="Adobe" checked-icon="playlist_add_check" />
									</div>
									<div class="block mb-1">
										<va-checkbox color="#9c27b0" v-model="agile" label="Agile" checked-icon="playlist_add_check" />
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
										<va-checkbox color="#9c27b0" v-model="android" label="Android" checked-icon="playlist_add_check" />
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

							<button
								type="submit"
								name="pobierz_imie"
								class="btn btn-outline-danger pobierz"
							>
								Pobierz
							</button>
						</div>
					</va-form>
					<!-- <form class="row" action="/wyslijimie" method="get"></form> -->
				</div>
				<div class="col-md-3 colDodajKandydata">
					<form class="row" action="/addedToDatabase" method="post">
						<button type="submit" class="btn btn-putline-danger dodaj">
							Dodaj kandydata
						</button>
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
							<button type="submit" name="btn_my_file_upload" class="btn btn-danger">
								Zapisz plik .json
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="row resultPersons" v-show="result.length > 0">
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
							<button type="submit" class="btn btn-outline-secondary editPerson">Edytuj</button>
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
							<button type="submit" class="btn btn-outline-secondary deletePerson">
								Usuń z bazy
							</button>
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
					@update:model-value="displayPage(valueCurrentStartItem, valueCurrentStartItem+9)"
					/>
					{{ valueCurrentStartItem }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.deletePerson {

}
.editPerson,
.deletePerson {
	font-size: 14px!important;
	height: 42px;
}
</style>