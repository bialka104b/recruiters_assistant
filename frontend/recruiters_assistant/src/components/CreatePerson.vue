<template v-if="showModalCreate">
	<div>
		<!-- this code is for unit testing  -->
		<!-- <button class="mx-1" @click="createPerson(candidate)">Zapisz</button>
		<button class="mx-1" @click="cancel()">Cancel</button>
		<input
			class="mt-2 wrapperInput"
			v-model="candidate.Imie"
			label="Imię:"
			input-class="inputClass"
		/> -->
		<va-modal
			v-model="showModalCreate"
			:no-dismiss="true"
			:hide-default-actions="true"
			:blur="false"
			fullscreen
			:fixed-layout="true"
		>
			<template #header>
				<div class="col-12 col-md-12">
					<h3>Dodaj kandydata: {{ candidate.Imie }} {{ candidate.Nazwisko }}</h3>
				</div>
			</template>
			<template #default>
				<va-form class="row" tag="form">
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Imie"
							label="Imię:"
							input-class="inputClass"
							:required-mark="true"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Nazwisko"
							label="Nazwisko:"
							input-class="inputClass"
							:required-mark="true"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Email"
							label="Email:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Telefon"
							label="Telefon:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Miejscowosc"
							label="Miejscowosc:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Angielski"
							label="Angielski:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Niemiecki"
							label="Niemiecki:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Pozostale_Jezyki"
							label="Inny język:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Wiek"
							label="Wiek:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Relokacja"
							label="Relokacja:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Doswiadczenie"
							label="Doswiadczenie:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Wym_Finansowe"
							label="Wymagania Finansowe:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-date-input
							class="mt-2 wrapperInput"
							v-model="candidate.Data_kontaktu"
							label="Data kontaktu"
							:highlight-weekend="true"
							:allowed-days="(date: Date) => calcAllowDays(date)"
							:allowed-months="(date: Date) => calcAllowDays(date)"
							:allowed-years="(date: Date) => calcAllowDays(date)"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Link_Do_Profilu"
							label="Link do profilu:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-12">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Technologie"
							label="Technologie:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-12">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Specjalnosc"
							label="Specjalnosc:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-12">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Firmy_Wspolpraca"
							label="Współpraca z firmami:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-12">
						<va-input
							class="mt-2 wrapperInput textArea"
							v-model="candidate.Komentarze"
							label="Komentarze:"
							input-class="inputClass"
							type="textarea"
							autosize
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Rozmowa_techniczna"
							label="Rozmowa techniczna:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Rozmowa_nietechniczna"
							label="Rozmowa nietechniczna:"
							input-class="inputClass"
						/>
					</div>
				</va-form>
			</template>
			<template #footer>
				<va-button
					class="mx-1 create"
					@click="createPerson(candidate)"
					:disabled="candidate.Imie && candidate.Nazwisko ? false : true"
					>Zapisz</va-button
				>
				<va-button class="mx-1 cancel" @click="cancel()">Cancel</va-button>
			</template>
		</va-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Axios from "axios";
import { NewPerson } from "../classess/newPerson";

export default defineComponent({
	name: "CreatePerson",
	emits: ["closeCreateModal", "successCreate"],
	props: {
		showModalCreate: Boolean,
	},
	data() {
		return {
			candidate: new NewPerson(),
			allowDays: false,
		};
	},
	created() {
		this.candidate.Data_kontaktu = new Date().toString()
	},
	methods: {
		calcAllowDays(date: Date) {

			if (date.getFullYear() > new Date().getFullYear()) {
				return false
			} else if (date.getFullYear() == new Date().getFullYear() && date.getMonth() > new Date().getMonth()) {
				return false
			} else if (date.getFullYear() == new Date().getFullYear() && date.getDate() > new Date().getDate()) {
				return false
			} else {
				return true
			}
		},
		createPerson(candidate: NewPerson) {
			candidate.Data_kontaktu = new Date(candidate.Data_kontaktu).toLocaleDateString("pl-PL");
			this.create(candidate);
			this.$emit("closeCreateModal", this.showModalCreate);
			this.$emit("successCreate", this.showModalCreate);
			this.candidate = new NewPerson();
		},
		cancel() {
			this.$emit("closeCreateModal", this.showModalCreate);
			this.candidate = new NewPerson();
		},

		async create(candidate: NewPerson) {
			const config = {
				method: "post",
				url: `http://localhost:8080/kandydaci/`,
				headers: {
					"Content-Type": "application/json",
				},
				data: candidate,
			};
			await Axios(config)
				.then((res) => {
					console.log(res, "res udało sie create");
				})
				.catch((err) => {
					console.log(err, "error mmmmmmm create");
				});
		},
	},
});
</script>
