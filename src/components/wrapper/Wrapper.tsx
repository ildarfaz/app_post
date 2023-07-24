import { useState } from "react";
import { useGetPostsQuery } from "../../stores/api/postsApi";
import { Content } from "../content/Content"
import { Pagination } from "../pagination/Pagination";
import { Search } from "../search/Search"
import styles from "./wrapper.module.scss";
import { enumDirection } from "../../types/common";

export const Wrapper = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [sortColumn, setSortColumn] = useState("id");
    const [direction, setDirection] = useState(enumDirection.ASC);
    const { data, isLoading } = useGetPostsQuery({ query, page, sortColumn, direction });
    return <div className={styles.box}>
        <Search onSearch={setQuery} />
        {isLoading && <p>Идет загрузка...</p>}
        {!isLoading && <><Content posts={data?.posts} />
            <Pagination total={data?.total} activePage={page} onChangePage={setPage} /></>}
    </div>
}