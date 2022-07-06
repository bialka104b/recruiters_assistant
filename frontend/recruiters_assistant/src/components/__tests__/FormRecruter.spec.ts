import { describe, it, expect } from "vitest";

import { mount, shallowMount } from "@vue/test-utils";
import FormRecruter from "../FormRecruter.vue";

describe("FormRecruter", () => {
	const wrapper = shallowMount(FormRecruter, {
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
	it("renders properly", () => {
        expect(wrapper.text()).toContain("AngielskiNiemiecki");
	});

	it("processes valid props data", async () => {
		await wrapper.get("[type='submit']").trigger("click");
	});
	
	it('Test', async () => {
		await wrapper.get("[title='Windows']").trigger("click");
	});

	it('Test', async () => {
		await wrapper.get("[title='C++']").trigger("click");
	});
	
});
