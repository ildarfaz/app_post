import { FC } from "react";
import { IPosts } from "../../../types/posts";
import { Button } from "../button/Button";
import styles from "./table.module.scss";

const headlines = ["ID", "Заголовок", "Описание"];

const tableTh = headlines.map((headline, index) => {
    return (
        <th key={headline + index}>
            <Button onClick={() => console.log({ headline })}>
                <>
                    <span>{headline}</span>
                </>
            </Button>
        </th>
    )
})

export const Table: FC<IPosts> = ({ posts }) => {
    
    const tableTd = posts?.length ? posts.map(({ id, title, body }) => {
        return (
            <tr key={id}>
                <td>{id}
                </td>
                <td>{title}
                </td>
                <td>{body}
                </td>
            </tr>
        )
    }) : <tr ><td colSpan={3}>Не найдено</td></tr>
    return (
        <div className={styles.box}>
            <table>
                <thead>
                    <tr>
                        {tableTh}
                    </tr>
                </thead>
                <tbody>
                    {tableTd}
                </tbody>
            </table>
        </div>
    )

}