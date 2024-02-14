import React from "react";
import { render } from "@testing-library/react";
import Logo from "@/components/layout/logo";
import { expect, describe, it } from "vitest";

describe("Logo", () => {
    it("renders the logo component correctly", () => {
        const { getByAltText } = render(<Logo />);

        expect(getByAltText("Logo")).toBeTruthy();
    });
});
