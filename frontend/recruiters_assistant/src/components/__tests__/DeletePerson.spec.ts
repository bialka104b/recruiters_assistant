import { describe, it, expect } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import DeletePerson from "../DeletePerson.vue";
import { Person } from "@/classess/person";

describe("DeletePerson", () => {
    const person = new Person("1234", "Marta", "Kulig");
    const buttonSelectorCancel = ".cancel";
    const buttonSelectorDelete = ".delete";
	it("renders properly", () => {
		const wrapper = shallowMount(DeletePerson, {
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

		setTimeout(async () => {
			expect(wrapper.findAll("h2").length).toEqual(1);

			expect(wrapper.findAll("h2").at(0)?.text()).toMatch(person.Imie);

			expect(wrapper.findAll("h2").at(0)?.text()).toMatch(person.Nazwisko);

			expect(await wrapper.find(buttonSelectorCancel).trigger("click")).toBeTruthy();
			expect(await wrapper.find(buttonSelectorDelete).trigger("click")).toBeTruthy();
		}, 100);
	});
});
