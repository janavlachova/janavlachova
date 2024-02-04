import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.center}>
                <span className="lighterText">{"<h1>"}</span>
                <h1>jana vlachova</h1>
                <span className="lighterText">{"</h1>"}</span>
            </div>

            <div className={styles.grid}>
                <Link href="/about" className={styles.card}>
                    <h3>About</h3>
                </Link>
                <Link href="/skills" className={styles.card}>
                    <h3>Skills</h3>
                </Link>
                <Link href="/projects" className={styles.card}>
                    <h3>Projects</h3>
                </Link>
                <Link href="/contact" className={styles.card}>
                    <h3>Contact</h3>
                </Link>
            </div>
        </div>
    );
}
