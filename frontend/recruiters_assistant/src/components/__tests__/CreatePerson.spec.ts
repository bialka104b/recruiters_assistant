import { describe, it, expect, test } from "vitest";

import { mount, shallowMount } from "@vue/test-utils";
import CreatePerson from "../CreatePerson.vue";
import { Person } from "@/classess/person";

test("CreatePerson", () => {
	const buttonSelectorCancel = ".cancel";
	const buttonSelectorDelete = ".create";
	const person = new Person();
	const wrapper = shallowMount(CreatePerson, {
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
				"va-file-upload": {
					template: "<div></div>",
				},
				"va-pagination": {
					template: "<div></div>",
				},
				"va-checkbox": {
					template: "<div></div>",
				},
			},
		},
	});
	
	it("processes valid props data", async () => {
		setTimeout(async () => {
			expect(wrapper.findAll("h2").length).toEqual(1);

			expect(wrapper.findAll("h2").at(0)?.text()).toMatch(person.Imie);
		}, 100);
	});

	it("processes valid props data", async () => {
		setTimeout(async () => {
			expect(wrapper.findAll("h2").at(0)?.text()).toMatch(person.Nazwisko);

			expect(await wrapper.find(buttonSelectorCancel).trigger("click")).toBeTruthy();

			expect(await wrapper.find(buttonSelectorDelete).trigger("click")).toBeTruthy();
		}, 100);
	});
	
	it("should work", (ctx) => {
		console.log(ctx.meta.suite.name, "- komponent CreatePerson pracuje");
	});
	
	
	it("renders properly", async () => {
		await wrapper.get("button").trigger("click");
		await wrapper.get("input").trigger("input");
		expect(wrapper.html()).toMatchSnapshot();
	});


	expect(wrapper.html()).toMatchSnapshot();
});
