import Layout from "@/components/layout/layout";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Layout withNavigation={true}>{children}</Layout>;
}
