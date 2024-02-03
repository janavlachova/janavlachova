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
    });
    it("should render proper layout", () => {
        render(
            <Layout>
                <div>Test Children</div>
            </Layout>,
        );
        expect(screen.getByText("Test Children")).toBeTruthy();
    });
});
