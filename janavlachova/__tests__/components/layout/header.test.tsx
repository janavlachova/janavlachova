import React from "react";
import { render } from "@testing-library/react";
import Header from "@/components/layout/header";
import { expect, describe, it } from "vitest";

describe("Header", () => {
    it("renders the header component correctly", () => {
        const { getByText } = render(<Header />);

        expect(getByText("jana vlachova")).toBeTruthy();
    });
});
