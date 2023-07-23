import styles from "./search.module.scss";
import { ReactComponent as IconSearch } from "../../assets/img/search.svg";

export const Search = () => {

    return <div className={styles.box}>
        <div className={styles.inner}>
            <input placeholder="Поиск" />
            <div className={styles.icon}>
                <IconSearch />
            </div>

        </div>
    </div>

}