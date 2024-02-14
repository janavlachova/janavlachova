import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "@/app/(pages)/about/page";

describe("about", () => {
    it("should render about page", () => {
        render(<About />);
        expect(screen.getByText("About Me")).toBeTruthy();
    });
});
