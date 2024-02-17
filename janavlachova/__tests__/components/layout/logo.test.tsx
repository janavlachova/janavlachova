import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "@/components/layout/logo";
import { expect, describe, it } from "vitest";

describe("Logo", () => {
    it("renders the logo component correctly", () => {
        render(<Logo />);

        expect(screen.getByAltText("Logo")).toBeTruthy();
    });
});
