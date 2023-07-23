import { useState } from "react";
import { Button } from "../ui/button/Button";
import styles from "./pagination.module.scss";

export const Pagination = () => {
    const pages = [1, 2, 3, 4, 5];
    const [activePage, setActivPage] = useState(1);
    const handlerPages = (page: number) => {
        setActivPage(page);
    }
    const pagesList = () => {
        return (
            <div className={styles.pages}>{pages.map((page) => {
                return <Button key={page} title={page.toString()}
                    onClick={() => handlerPages(page)} active={page === activePage} />
            })}</div>
        )
    }
    return <div className={styles.box}>
        <Button title="Назад" onClick={() => activePage !== pages[0] && handlerPages(activePage - 1)} />
        {pagesList()}
        <Button title="Далее" onClick={() => activePage !== pages.length && handlerPages(activePage + 1)} />
    </div> 

}