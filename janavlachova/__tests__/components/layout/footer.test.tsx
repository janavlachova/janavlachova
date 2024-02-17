import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/footer";
import { expect, describe, it } from "vitest";

describe("Footer", () => {
    it("renders the footer component correctly", () => {
        render(<Footer />);

        // Assert that the copyright text is rendered correctly
        expect(
            screen.getByText(`© ${new Date().getFullYear()} jana vlachova`),
        ).toBeTruthy();
    });
});
