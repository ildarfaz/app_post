import { FC } from "react";
import styles from "./button.module.scss";

type IButton = {
    title: string;
    onClick: () => void;
    active?: boolean;
}
export const Button: FC<IButton> = ({ title, onClick, active }) => {
    return (
        <div className={styles.box}>
            <button className={active ? styles.active : ""}
                onClick={onClick}>{title}</button>
        </div>

    )

}