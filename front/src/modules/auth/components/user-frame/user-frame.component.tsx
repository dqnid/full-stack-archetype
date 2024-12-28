import Image from "next/image";

import styles from "./user-frame.module.scss";
import { getServerSession } from "next-auth";
import SignInButton from "../sign-in-button";

export async function UserFrame() {
    const session = await getServerSession();

    if (!session) {
        return <SignInButton />;
    }

    return (
        <div className={styles.frame}>
            <span className={styles.initials}>
                {getInitialsFromName(session?.user?.name || "00")}
            </span>
            <Image
                className={styles["profile__picture"]}
                src={session?.user?.image || ""}
                alt="user profile picture"
                fill={true}
                sizes="(max-width: 768px) 10rem, 6rem"
                priority={true}
            />
        </div>
    );
}

const getInitialsFromName = (name: string): string => {
    if (name.length < 1) return "00";

    // TODO: this can be done in one line probably
    const words = name.split(" ");
    let initials = "";
    words.forEach((word) => (initials += word[0]));
    if (initials.length < 2) {
        initials += name[1];
    }

    return initials.slice(0, 2);
};
