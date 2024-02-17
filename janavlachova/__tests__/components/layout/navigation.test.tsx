import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/layout/navigation";
import { expect, describe, it } from "vitest";

describe("Navigation", () => {
    it("renders the navigation component correctly", () => {
        render(<Navigation />);

        expect(screen.getByText("about")).toBeTruthy();
        expect(screen.getByText("contact")).toBeTruthy();
        expect(screen.getByText("experiences")).toBeTruthy();
    });
});
