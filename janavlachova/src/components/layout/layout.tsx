import { Inter } from "next/font/google";
import Header from "@/components/layout/header";
import styles from "./layout.module.css";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({
    children,
    withNavigation = true,
}: Readonly<{
    children: React.ReactNode;
    withNavigation?: boolean;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className={styles.layout}>
                    <Header withNavigation={withNavigation} />
                    <main className={styles.main + " pageContainer"}>
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
