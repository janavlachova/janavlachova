import React from "react";
import styles from "./footer.module.css";

const Header: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="pageContainer">
                <span>© 2024 jana vlachova</span>
            </div>
        </footer>
    );
};

export default Header;
