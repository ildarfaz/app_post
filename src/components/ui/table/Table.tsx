import styles from "./table.module.scss";

export const Table = () => {


    return (
        <div className={styles.box}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Заголовок</th>
                        <th>Описание</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Заголовок</td>
                        <td>Описание</td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td>Заголовок</td>
                        <td>Описание</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}