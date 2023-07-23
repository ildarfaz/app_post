import { Button } from "../ui/button/Button";
import styles from "./pagination.module.scss";

export const Pagination = () => {
    const pages = () => {
        return (
            <div className={styles.pages}>{[1, 2, 3, 4, 5].map((page) => {
                return <Button title={page.toString()} onClick={() => console.log(page)}/>
            })}</div>
        )
    }
    return <div className={styles.box}>
        <Button title="Назад" onClick={() => console.log("Назад")} />
        {pages()}
        <Button title="Далее" onClick={() => console.log("Далее")} />
    </div>

}