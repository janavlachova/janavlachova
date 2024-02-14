import React from "react";
import { render } from "@testing-library/react";
import Navigation from "@/components/layout/navigation";
import { expect, describe, it } from "vitest";

describe("Navigation", () => {
    it("renders the navigation component correctly", () => {
        const { getByText } = render(<Navigation />);

        expect(getByText("about")).toBeTruthy();
        expect(getByText("contact")).toBeTruthy();
        expect(getByText("experiences")).toBeTruthy();
    });
});
