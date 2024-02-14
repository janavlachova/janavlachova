import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <div className={styles.center}>
                <div className={styles.line}>
                    <span className={styles.tag}>{"<h1>"}</span>
                    <h1>jana vlachova</h1>
                    <span className={styles.tag}>{"</h1>"}</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.tag}>{"<p>"}</span>
                    <p>full stack web developer</p>
                    <span className={styles.tag}>{"</p>"}</span>
                </div>
            </div>

            <div className={styles.grid}>
                <Link href="/about" className={styles.card}>
                    <h3>about</h3>
                </Link>
                <Link href="/experiences" className={styles.card}>
                    <h3>experiences</h3>
                </Link>
                <Link href="/contact" className={styles.card}>
                    <h3>contact</h3>
                </Link>
            </div>
        </div>
    );
}
