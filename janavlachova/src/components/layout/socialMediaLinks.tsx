import React from "react";
import Link from "next/link";
import Image from "../base/image";
import styles from "./socialMediaLinks.module.css";

const SocialMediaLinks: React.FC = () => {
    return (
        <ul className={styles.links}>
            <li>
                <Link href="https://github.com/janavlachova" target="_blank">
                    <Image
                        src="images/github-mark.svg"
                        srcDark="images/github-mark-white.svg"
                        alt="janavlachova GitHub"
                        width={30}
                        height={30}
                    />
                </Link>
            </li>
            <li>
                <Link
                    href="https://www.linkedin.com/in/jana-vlachova/"
                    target="_blank"
                >
                    <Image
                        src="images/LI-In-Bug.png"
                        alt="Jana Vlachova LinkedIn"
                        width={30}
                        height={30}
                    />
                </Link>
            </li>
        </ul>
    );
};

export default SocialMediaLinks;
