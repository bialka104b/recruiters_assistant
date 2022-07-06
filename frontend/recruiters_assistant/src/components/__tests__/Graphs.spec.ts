import { describe, it, expect } from "vitest";

import { mount, shallowMount } from "@vue/test-utils";
import Graphs from "../Header.vue";

describe("Graphs", () => {
	const wrapper = shallowMount(Graphs, {
		global: {
			stubs: {
				"va-modal": {
					template: "<div></div>",
				},
				"Header": {
					template: "<div></div>",
				},
				"router-link": {
					template: "<div></div>",
				},
			},
		},
	});

	it("processes valid props data", () => {
		setTimeout(async () => {
			await expect(wrapper.find("DoughnutChart").exists()).toBe(true);
		}, 100);
	});
	
	it("processes valid props data", () => {
		setTimeout(async () => {
			await expect(wrapper.find("BarChart").exists()).toBe(true);
		}, 100);
	});
});
