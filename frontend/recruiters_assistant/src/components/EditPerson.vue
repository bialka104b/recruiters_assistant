<template v-if="showModalEdit">
	<div>
		{{ run() }}
		<va-modal
			v-model="showModalEdit"
			:no-dismiss="true"
			:hide-default-actions="true"
			:blur="false"
			fullscreen
			:fixed-layout="true"
		>
			<template #header v-if="person">
				<div class="col-12 col-md-12">
					<h3>Edytuj kandydata: {{ candidate.Imie }} {{ candidate.Nazwisko }}</h3>
				</div>
			</template>
			<template #default v-if="person">
				<va-form class="row" tag="form">
					<!-- @submit.prevent="handleSubmit" -->
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Imie"
							label="Imię:"
							input-class="inputClass"
						/>
					</div>
					<div class="opakowanie col-md-6">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Nazwisko"
							label="Nazwisko:"
							input-class="inputClass"
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
						<!-- <va-input
							class="mt-2 wrapperInput"
							v-model="candidate.Data_kontaktu"
							label="Data kontaktu:"
							input-class="inputClass"
						/> -->
						<va-date-input
							class="mt-2 wrapperInput"
							v-model="candidate.Data_kontaktu"
							label="Data kontaktu"
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
					<div class="opakowanie col-md-12">
						<va-input
							class="mt-2 wrapperInput"
							v-model="candidate._id"
							label="ID KANDYDATA"
							input-class="inputClass"
							readonly
						/>
					</div>
				</va-form>
			</template>
			<template #footer>
				<va-button class="mx-1" @click="editPerson(candidate)">Zapisz</va-button>
				<va-button class="mx-1" @click="cancel()">Cancel</va-button>
			</template>
		</va-modal>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Axios from "axios";
import { Person } from "../classess/person";

export default defineComponent({
	name: "EditPerson",
	emits: ["closeEditModal", "successEdit"],
	props: {
		person: Person,
		showModalEdit: Boolean,
	},
	data() {
		return {
			candidate: new Person(),
			showModal: false,

			// id: '',
			// firstname: '',
			// surname: '',
			// english: '',
			// german:  '',
			// experience: '',
			// email:  '',
			// collaboration:  '',
			// comments:  '',
			// linkToProfile: '',
			// city: '',
			// otherLanguages:  '',
			// relocation:  '',
			// conversationNonTechnical:  '',
			// conversationTechnical:  '',
			// spaciality:  '',
			// statusInterested: false,
			// technology: '',
			// phone: '',
			// requireFinancial :  '',
			// contactDate: '',
			// age:  '',
		};
	},
	created() {
		this.showModal = this.showModalEdit;
	},
	methods: {
		run() {
			if (this.person) {
				this.candidate._id = this.person._id;
				this.candidate.Imie = this.person.Imie;
				this.candidate.Nazwisko = this.person.Nazwisko;
				this.candidate.Angielski = this.person.Angielski;
				this.candidate.Niemiecki = this.person.Niemiecki;
				this.candidate.Doswiadczenie = this.person.Doswiadczenie;
				this.candidate.Email = this.person.Email;
				this.candidate.Firmy_Wspolpraca = this.person.Firmy_Wspolpraca;
				this.candidate.Komentarze = this.person.Komentarze;
				this.candidate.Link_Do_Profilu = this.person.Link_Do_Profilu;
				this.candidate.Miejscowosc = this.person.Miejscowosc;
				this.candidate.Pozostale_Jezyki = this.person.Pozostale_Jezyki;
				this.candidate.Relokacja = this.person.Relokacja;
				this.candidate.Rozmowa_nietechniczna = this.person.Rozmowa_nietechniczna;
				this.candidate.Rozmowa_techniczna = this.person.Rozmowa_techniczna;
				this.candidate.Specjalnosc = this.person.Specjalnosc;
				this.candidate.Status_Zainteresowany = this.person.Status_Zainteresowany;
				this.candidate.Technologie = this.person.Technologie;
				this.candidate.Telefon = this.person.Telefon;
				this.candidate.Wym_Finansowe = this.person.Wym_Finansowe;
				this.candidate.Data_kontaktu = this.person.Data_kontaktu;
				this.candidate.Wiek = this.person.Wiek;
			}
		},

		editPerson(candidate: Person) {
			this.put(candidate);
			this.$emit("closeEditModal", this.showModalEdit);
			this.$emit("successEdit", this.showModalEdit);
		},
		cancel() {
			this.$emit("closeEditModal", this.showModal);
		},
		async put(person: Person) {
			await Axios.put(`http://localhost:8080/kandydaci/${person._id}`, person, {
				headers: {
					"Content-type": "application/json",
				},
			})
				.then((res) => {
					console.log(res, "res udało sie put");
				})
				.catch((err) => {
					console.log(err, "error put");
				});
		},
	},
});
</script>
