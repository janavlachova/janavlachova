import { expect, describe, it, vi, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
import Layout from "@/app/layout";

describe("layout", () => {
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
});
