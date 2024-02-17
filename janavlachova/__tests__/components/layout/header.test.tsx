import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/header";
import { expect, describe, it } from "vitest";

describe("Header", () => {
    it("renders the header component correctly", () => {
        render(<Header />);

        expect(screen.getByText("jana vlachova")).toBeTruthy();
    });
});
