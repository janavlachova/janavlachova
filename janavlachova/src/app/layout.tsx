import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
    title: "jana vlachova",
    description: "fullstack web developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="en">{children}</html>;
}
