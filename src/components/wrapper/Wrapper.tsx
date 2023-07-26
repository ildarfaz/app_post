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
    const [sort, setSort] = useState({ column: "id", direction: enumDirection.DESC });
    const { data, isLoading } = useGetPostsQuery({ query, page, sortColumn: sort.column, direction: sort.direction });
    return <div className={styles.box}>
        <Search onSearch={setQuery} onChangePage={setPage} />
        {isLoading ? <p>Идет загрузка...</p> :
            <><Content posts={data?.posts} sort={sort} onChangeSort = {setSort}/>
                <Pagination total={data?.total} activePage={page} onChangePage={setPage} /></>}
    </div>
}