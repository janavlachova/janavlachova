import { shallowMount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import slug from "@/pages/[...slug].vue";

describe("[...slug]", () => {
    it("renders content", () => {
        const wrapper = shallowMount(slug, {
            route: "/about",
            global: {
                plugins: [useRouter()],
            },
        });
        expect(wrapper.getComponent("content-doc-stub")).toBeTruthy();
    });

    it("renders content for a specific locale", () => {
        const wrapper = shallowMount(slug, {
            route: "/cs/about",
            global: {
                plugins: [useRouter()],
            },
        });
        expect(wrapper.getComponent("content-doc-stub")).toBeTruthy();
    });
});
