import React from "react";
import Logo from "./logo";
import styles from "./header.module.css";
import Navigation from "./navigation";
import Link from "next/link";
import SocialMediaLinks from "./socialMediaLinks";

type HeaderProps = {
    withNavigation?: boolean;
};

const Header: React.FC<HeaderProps> = ({
    withNavigation = true,
}: Readonly<HeaderProps>) => {
    return (
        <header className={styles.header}>
            <div className="pageContainer">
                <Link className={styles.headerGroup} href="/">
                    <Logo />
                    <span>jana vlachova</span>
                </Link>
                <div className={styles.headerGroup}>
                    {withNavigation && <Navigation />}
                    <SocialMediaLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;
