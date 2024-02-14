import { expect, describe, it, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Layout from "@/app/(pages)/layout";

describe("pages-layout", () => {
    beforeAll(() => {
        vi.mock("next/font/google", () => {
            return {
                Inter: () => ({
                    className: "inter",
                }),
            };
        });
        render(
            <Layout>
                <div>Test Children</div>
            </Layout>,
        );
    });
    it("should render proper layout", () => {
        expect(screen.getByText("Test Children")).toBeTruthy();
    });
    it("should render footer", () => {
        expect(
            screen.getByText(`© ${new Date().getFullYear()} jana vlachova`),
        ).toBeTruthy();
    });
    it("should render navigation", () => {
        expect(screen.getByText("about")).toBeTruthy();
    });
    it("should render header", () => {
        expect(screen.getByText("jana vlachova")).toBeTruthy();
    });
    it("should render logo", () => {
        expect(screen.getByAltText("Logo")).toBeTruthy();
    });
});
