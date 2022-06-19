<template v-if="showModalDelete">
	<div>
		{{ run() }}
		<va-modal v-model="showModalDelete" :hide-default-actions="true" :blur="false" no-dismiss>
			<template #header>
				<h2 class="mb-3" v-if="person != null">
					Czy jesteś pewien że chcesz usunąć {{ person.Nazwisko }} {{ person.Imie }}
				</h2>
			</template>
			<template #footer>
				<va-button class="mx-1" @click="deletePerson(candidate)">Usuń</va-button>
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
	name: "DeletePerson",
	emits: ["closeDeleteModal", "successDelete"],
	props: {
		person: Person,
		showModalDelete: Boolean,
	},
	data() {
		return {
			candidate: new Person(),
		};
	},
	created() {},
	methods: {
		run() {
			if (this.person) {
				this.candidate._id = this.person._id;
			}
		},

		deletePerson(userik: Person) {
			this.poscik(userik._id);
			this.$emit("closeDeleteModal", this.showModalDelete);
			this.$emit("successDelete", this.showModalDelete);
		},
		cancel() {
			this.$emit("closeDeleteModal", this.showModalDelete);
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
	},
});
</script>
