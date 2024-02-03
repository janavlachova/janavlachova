import React from "react";
import Logo from "./logo";
import styles from "./header.module.css";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className="pageContainer">
                <div className={styles.headerGroup}>
                    <Logo />
                    <span>jana vlachova</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
