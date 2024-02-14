import React from "react";
import styles from "./navigation.module.css";
import Link from "next/link";

const Navigation: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link href="/about" className={styles.card}>
                about
            </Link>
            <Link href="/experiences" className={styles.card}>
                experiences
            </Link>
            <Link href="/contact" className={styles.card}>
                contact
            </Link>
        </nav>
    );
};

export default Navigation;
