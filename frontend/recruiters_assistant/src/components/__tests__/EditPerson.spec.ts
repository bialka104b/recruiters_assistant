import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import EditPerson from "../EditPerson.vue";
import { Person } from "@/classess/person";

describe("EditPerson", () => {
	const person = new Person("1234", "Marta", "Kulig");
	const wrapper = shallowMount(EditPerson, {
		props: {
			person: person,
			showModalDelete: true,
		},
		global: {
			stubs: {
				"va-modal": {
					template: "<div></div>",
				},
				"va-button": {
					template: "<div></div>",
				},
				"va-form": {
					template: "<div></div>",
				},
				"va-date-input": {
					template: "<div></div>",
				},
				"va-input": {
					template: "<div></div>",
				},
			},
		},
	});

	it("renders properly", () => {
		expect(wrapper.vm.$options.emits.at(0)).toMatch("closeEditModal");
	});

	it("renders properly", () => {
		expect(wrapper.vm.$options.emits.at(1)).toMatch("successEdit");
	});

	it("processes valid props data", async () => {
		wrapper.setProps({
			person: person,
			showModalEdit: true,
		});

		wrapper.vm.$nextTick().then(async function () {
			expect(wrapper.vm.person.Nazwisko).toMatchObject("Kulig");
			expect(wrapper.vm.person.Imie).toMatchObject("Marta");
			expect(wrapper.findAll("h3").at(0)?.text()).toMatch("Edytuj kandydata: Marta Kulig");
		});
	});
});
