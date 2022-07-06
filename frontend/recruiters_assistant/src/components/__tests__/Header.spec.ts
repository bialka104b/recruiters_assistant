import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Header from "../Header.vue";

describe("Header", () => {

	const wrapper = mount(Header, { });
	it("renders properly", () => {
        expect(wrapper.text()).toContain("Start");
	});

	it("processes valid props data", async () => {
		expect(wrapper.text()).toContain("Wykresy");
	});

	it("processes valid props data", async () => {
		expect(wrapper.text()).toContain("O Nas");
	});
});
