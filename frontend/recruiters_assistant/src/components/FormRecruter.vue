<script setup lang="ts">
defineProps<{
	msg: string;
}>();
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
								<div class="block">

									<div class="w-50">
										<label for="nazwisko">Wybierz nazwisko:</label>
									</div>
									<div class="w-50">
										
										<input type="text" name="nazwisko" id="nazwisko" />
									</div>
								</div>
							</div>
							<div class="opakowanie">
								<div class="block">
									<div class="w-50">
										<label for="specjalnosc">Wybierz Specjalność:</label>
									</div>
									<div class="w-50">
										<input type="text" name="specjalnosc" id="specjalnosc" />
									</div>
								</div>
							</div>
							<div class="opakowanie">
								<div class="block">
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
							<div class="block">
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
							<div class="block">
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
							<div class="block">
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
									<div class="block">
										<div class="w-100 bigcheck">
											<!-- <span class="bigcheck"> -->
												<label class="bigcheck">
													<input type="checkbox" class="bigcheck" id="adobe"
													name="adobe"
													value="adobe"
													defaultChecked="false"
													/>
													<span class="bigcheck-target"></span>
													Adobe
												</label>
											<!-- </span> -->
											<!-- <input
												type="checkbox"
												id="adobe"
												name="adobe"
												value="adobe"
												defaultChecked="false"
											/>
											<label for="adobe">Adobe</label> -->
										</div>
									</div>
									<div class="block">
										<div class="w-100 bigcheck">
											<label class="bigcheck">
												<input type="checkbox" class="bigcheck" id="agile"
												name="agile"
												value="agile"
												defaultChecked="false"
												/>
												<span class="bigcheck-target"></span>
												Agile
											</label>
										</div>
									</div>
									<div class="block">
										<div class="w-100 bigcheck">
											<label class="bigcheck">
												<input type="checkbox" class="bigcheck" id="android"
												name="android"
												value="android"
												/>
												<span class="bigcheck-target"></span>
												Android
											</label>
										</div>
									</div>
									<div class="block">
										<div class="w-100 bigcheck">
											<label class="bigcheck">
												<input type="checkbox" class="bigcheck" id="angular"
												name="angular"
												value="angular"
												/>
												<span class="bigcheck-target"></span>
												Angular
											</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="aws"
												name="aws"
												value="aws"
												defaultChecked="false"
											/>
											<label for="aws">AWS</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="bash"
												name="bash"
												value="bash"
												defaultChecked="false"
											/>
											<label for="bash">Bash</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="bootstrap"
												name="bootstrap"
												value="bootstrap"
												defaultChecked="false"
											/>
											<label for="bootstrap">Bootstrap</label>
										</div>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="css"
												name="css"
												value="css"
												defaultChecked="false"
											/>
											<label for="css">CSS</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="csharp"
												name="csharp"
												value="c#"
												defaultChecked="false"
											/>
											<label for="csharp">C#</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="cpp"
												name="cpp"
												value="C\/++"
												defaultChecked="false"
											/>
											<label for="cpp">C++</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="c"
												name="c"
												value="C"
												defaultChecked="false"
											/>
											<label for="c">C</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="delphi"
												name="delphi"
												value="delphi"
												defaultChecked="false"
											/>
											<label for="delphi">Delphi</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="html"
												name="html"
												value="html"
												defaultChecked="false"
											/>
											<label for="html">HTML</label>
										</div>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="ios"
												name="ios"
												value="ios"
												defaultChecked="false"
											/>
											<label for="ios">IOS</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="java"
												name="java"
												value="java,"
												defaultChecked="false"
											/>
											<label for="java">JAVA</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="javascript"
												name="javascript"
												value="javascript"
												defaultChecked="false"
											/>
											<label for="javascript">JavaScript</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="jQuery"
												name="jQuery"
												value="jQuery"
												defaultChecked="false"
											/>
											<label for="jQuery">jQuery</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="kanban"
												name="kanban"
												value="kanban"
												defaultChecked="false"
											/>
											<label for="kanban">Kanban</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="less"
												name="less"
												value="less"
												defaultChecked="false"
											/>
											<label for="less">Less</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="linux"
												name="linux"
												value="linux"
												defaultChecked="false"
											/>
											<label for="linux">Linux</label>
										</div>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="dotNet"
												name="dotNet"
												value=".net"
												defaultChecked="false"
											/>
											<label for="dotNet">.NET</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="node"
												name="node"
												value="node"
												defaultChecked="false"
											/>
											<label for="node">Node.js</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="oracle"
												name="oracle"
												value="oracle"
												defaultChecked="false"
											/>
											<label for="oracle">Oracle</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="perl"
												name="perl"
												value="perl"
												defaultChecked="false"
											/>
											<label for="perl">Perl</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="photoshop"
												name="photoshop"
												value="photoshop"
												defaultChecked="false"
											/>
											<label for="photoshop">Photoshop</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="php"
												name="php"
												value="php"
												defaultChecked="false"
											/>
											<label for="php">PHP</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="powershell"
												name="powershell"
												value="powershell"
												defaultChecked="false"
											/>
											<label for="powershell">Powershell</label>
										</div>
									</div>
								</div>
								<div class="col-sm-2">
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="python"
												name="python"
												value="python"
												defaultChecked="false"
											/>
											<label for="python">Python</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="react"
												name="react"
												value="react"
												defaultChecked="false"
											/>
											<label for="react">React</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="ruby"
												name="ruby"
												value="ruby"
												defaultChecked="false"
											/>
											<label for="ruby">Ruby</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="sass"
												name="sass"
												value="sass"
												defaultChecked="false"
											/>
											<label for="sass">Sass</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="scala"
												name="scala"
												value="scala"
												defaultChecked="false"
											/>
											<label for="scala">Scala</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="scrum"
												name="scrum"
												value="scrum"
												defaultChecked="false"
											/>
											<label for="scrum">Scrum</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="spring"
												name="spring"
												value="spring"
												defaultChecked="false"
											/>
											<label for="spring">Spring</label>
										</div>
									</div>
								</div>

								<div class="col-sm-2">
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="sql"
												name="sql"
												value="sql"
												defaultChecked="false"
											/>
											<label for="sql">SQL/MySQL</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="scss"
												name="scss"
												value="scss"
												defaultChecked="false"
											/>
											<label for="scss">Scss</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="swift"
												name="swift"
												value="swift"
												defaultChecked="false"
											/>
											<label for="swift">Swift</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="vue"
												name="vue"
												value="vue"
												defaultChecked="false"
											/>
											<label for="vue">Vue</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="vb"
												name="vb"
												value="vb"
												defaultChecked="false"
											/>
											<label for="vb">VB/VBA</label>
										</div>
									</div>
									<div class="block">
										<div class="w-50">
											<input
												type="checkbox"
												id="windows"
												name="windows"
												value="windows"
												defaultChecked="false"
											/>
											<label for="windows">Windows</label>
										</div>
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
