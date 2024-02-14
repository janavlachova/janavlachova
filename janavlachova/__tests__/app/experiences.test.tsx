import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Experiences from "@/app/(pages)/experiences/page";

describe("experiences", () => {
    it("should render skills backend", () => {
        render(<Experiences />);
        expect(screen.getByText("Projects")).toBeTruthy();
        expect(screen.getByText("Skills")).toBeTruthy();
    });
});
