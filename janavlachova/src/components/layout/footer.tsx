import React from "react";
import styles from "./footer.module.css";

const Header: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="pageContainer lighterText">
                <span>© {new Date().getFullYear()} jana vlachova</span>
                <a href="https://github.com/janavlachova/janavlachova">
                    This page source code on GitHub
                </a>
            </div>
        </footer>
    );
};

export default Header;
