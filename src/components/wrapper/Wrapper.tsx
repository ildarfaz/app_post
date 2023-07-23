import { Content } from "../content/Content"
import { Pagination } from "../pagination/Pagination";
import { Search } from "../search/Search"
import styles from "./wrapper.module.scss";

export const Wrapper = () => {
    return <div className={styles.box}>
        <Search />
        <Content />
        <Pagination />
    </div>
}