import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/(home)/page";

describe("home", () => {
    it("should render home page", () => {
        render(<Home />);
        expect(screen.getByText("jana vlachova")).toBeTruthy();
    });
});
