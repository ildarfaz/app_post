import { FC } from "react";
import styles from "./button.module.scss";

type IButton = {
    title: string;
    onClick: () => void;
}
export const Button: FC<IButton> = ({ title, onClick }) => {
    return (
        <div className={styles.box}>
            <button onClick={onClick}>{title}</button>
        </div>

    )

}