import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "@/app/(pages)/contact/page";

describe("contact", () => {
    it("should render contact page", () => {
        render(<Contact />);
        expect(screen.getByText("Contact Me")).toBeTruthy();
    });
});
