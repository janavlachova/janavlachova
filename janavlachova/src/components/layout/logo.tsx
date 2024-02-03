import React from "react";
import Image from "next/image";
import styles from "./logo.module.css";

const Logo: React.FC = () => {
    return (
        <div className={styles.logo}>
            <Image src="images/logo.svg" alt="Logo" width={70} height={70} />
        </div>
    );
};

export default Logo;
