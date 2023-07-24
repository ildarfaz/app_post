import { FC } from "react";
import { Button } from "../ui/button/Button";
import styles from "./pagination.module.scss";

interface IPagitation {
    total: number | undefined;
    activePage: number;
    onChangePage: (nowPage: number) => void;
}

export const Pagination: FC<IPagitation> = ({ total = 0, activePage, onChangePage }) => {
    const pages = Array.from(Array(Math.floor(total / 10) + 1).keys()).slice(1);
    const handlerPages = (page: number) => {
        onChangePage(page);
    }
    const pagesList = () => {
        return (
            <div className={styles.pages}>{pages.map((page, index) => {
                return <Button key={page + index}
                    onClick={() => handlerPages(page)} active={activePage === page} >{(page).toString()}</Button>
            })}</div>
        )
    }
    return <div className={styles.box}>
        <Button onClick={() => activePage !== pages[0] && handlerPages(activePage - 1)}>{"Назад"}</Button>
        {pagesList()}
        <Button onClick={() => activePage !== pages.length && handlerPages(activePage+ 1)} >{"Далее"}</Button>
    </div>

}