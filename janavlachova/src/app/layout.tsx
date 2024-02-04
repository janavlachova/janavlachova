import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import styles from "./layout.module.css";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "jana vlachova",
    description: "fullstack web developer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.layout}>
                    <Header />
                    <main className={styles.main + " pageContainer"}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
