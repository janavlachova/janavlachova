import React from "react";
import { render } from "@testing-library/react";
import Footer from "@/components/layout/footer";
import { expect, describe, it } from "vitest";

describe("Footer", () => {
    it("renders the footer component correctly", () => {
        const { getByText } = render(<Footer />);

        // Assert that the copyright text is rendered correctly
        expect(
            getByText(`© ${new Date().getFullYear()} jana vlachova`),
        ).toBeTruthy();
    });
});
