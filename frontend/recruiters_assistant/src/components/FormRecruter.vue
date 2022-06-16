<script lang="ts">
import { createApp, type defineComponent } from 'vue';

export default {
	name: "FormRecruter",
	props: {
		msg: String,
	},
	data() { 
		return {
			adobe: true,
			agile: true,
			android: true,
			angular: false,
			aws: true,
			bash: true,
			bootstrap: true,
			css: true,
			csharp: true,
			cpp: true,
			c: true,
			delphi: true,
			html: true,
			ios: true,
			java: true,
			javascript: true,
			jQuery: true,
			kanban: true,
			less:true,
			linux:true,
			dotNet:true,
			node:true,
			oracle:true,
			perl:true,
			photoshop:true,
			php:true,
			powershell:true,
			python: true,
			react: true,
			ruby: true,
			sass: true,
			scala: true,
			scrum: true,
			spring: true,
			sql: true,
			scss: true,
			swift: true,
			vue: true,
			vb: true,
			windows: true,
		}
	},
	
}
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
					<form class="row" action="/wyslijimie" method="get">
						<div class="col-sm-6 dane_osobowe">
							<div class="opakowanie">
								<div class="block mb-1">
									<div class="w-50">
										<label for="nazwisko">Wybierz nazwisko:</label>
									</div>
									<div class="w-50">
										<input type="text" name="nazwisko" id="nazwisko" />
									</div>
								</div>
							</div>
							<div class="opakowanie">
								<div class="block mb-1">
									<div class="w-50">
										<label for="specjalnosc">Wybierz Specjalność:</label>
									</div>
									<div class="w-50">
										<input type="text" name="specjalnosc" id="specjalnosc" />
									</div>
								</div>
							</div>
							<div class="opakowanie">
								<div class="block mb-1">
									<div class="w-50">
										<label for="miejscowosc">Wybierz miejscowość:</label>
									</div>
									<div class="w-50">
										<input type="text" name="miejscowosc" id="miejscowosc" />
									</div>
								</div>
							</div>
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
									<!-- {{!-- AAAAA --}} -->
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
					</form>
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
						<div class="fileUpload">
							<label for="file" class="btn btn-primary">Dodaj plik .json</label>
							<input
								id="file"
								type="file"
								name="my_file_upload"
								class="btn btn-primary"
							/>
						</div>
						<div class="zapisz">
							<button type="submit" name="btn_my_file_upload" class="btn btn-danger">
								Zapisz plik .json
							</button>
						</div>
					</form>
				</div>
			</div>
			<div class="row kolumna2" id="kolumna2">
				<!-- {{#each person}} -->
				<div class="persons col-sm-4">
					<div class="dane">
						<!-- <div class="info name">{{@index}}. {{Imie}} {{Nazwisko}}</div>
                    <div class="info">EMAIL: <p>{{Email}}</p>
                    </div>
                    <div class="info">TELEFON: <p>{{Telefon}}</p>
                    </div>
                    <div class="info">MIEJSCOWOŚĆ: <p>{{Miejscowosc}}</p>
                    </div>
                    <div class="info">ANGIELSKI: <p>{{Angielski}}</p>
                    </div>
                    <div class="info">NIEMIECKI: <p>{{Niemiecki}}</p>
                    </div>
                    <div class="info">INNE JĘZYKI: <p>{{Pozostale_Jezyki}}</p>
                    </div>
                    <div class="info">WIEK: <p>{{Wiek}}</p>
                    </div>
                    <div class="info">RELOKACJA: <p>{{Relokacja}}</p>
                    </div>
                    <div class="info">WSPÓŁPRACA Z FIRMAMI: <p>{{Firmy_Wspolpraca}}</p>
                    </div>
                    <div class="info">DOŚWIADCZENIE: <p>{{Doswiadczenie}} lat</p>
                    </div>
                    <div class="info">WYMAGANIA FINANOSOWE: <p>{{Wym_Finansowe}}</p>
                    </div>
                    <div class="info">TECHNOLOGIE: <p>{{Technologie}}</p>
                    </div>
                    <div class="info">KOMENTARZE: <p>{{Komentarze}}</p>
                    </div>
                    <div class="info linkedin">LINKEDIN: <p><a href="{{Link_Do_Profilu}}">{{Link_Do_Profilu}}</a></p>
                    </div>
                    <div class="info">SPECJALNOŚĆ: <p>{{Specjalnosc}}</p>
                    </div>
                    <div class="info">OSTATNI KONTAKT: <p>{{Data_kontaktu}}</p>
                    </div>
                    <div class="info">STATUS: {{Status_Zainteresowany}}</div>
                    <div class="info">Rozmowa techniczna: {{Rozmowa_techniczna}}</div>
                    <div class="info">Rozmowa nietechniczna: {{Rozmowa_nietechniczna}}</div> -->
					</div>

					<div class="row forms">
						<form class="col-md-6 colForm" action="/editUser" method="get">
							<input
								type="checkbox"
								id="{{_id}}"
								name="editUser"
								value="{{_id}}"
								defaultChecked="true"
							/>
							<label for="{{_id}}"></label>
							<button type="submit" class="btn btn-outline-secondary">Edytuj</button>
						</form>
						<form class="col-md-6 colForm" action="/deleteUser" method="get">
							<input
								type="checkbox"
								id="{{_id}}1"
								name="deleteUser"
								value="{{_id}}"
								defaultChecked="true"
							/>
							<label for="{{_id}}1"></label>
							<button type="submit" class="btn btn-outline-secondary">
								Usuń z bazy
							</button>
						</form>
					</div>
				</div>
				<!-- {{/each}} -->
			</div>
		</div>
	</div>
</template>
