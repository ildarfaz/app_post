import { FC } from 'react'
import { Button } from '../button/Button'
import styles from './table.module.scss'
import { ReactComponent as IconDown } from '../../../assets/img/down.svg';
import { ITable, enumDirection } from '../../../types/common';

interface IHeadlines {
  id: string;
  title: string;
  body: string;
}
const headlines = { id: 'ID', title: 'Заголовок', body: 'Описание' };

export const Table: FC<ITable> = ({ posts, sort, onChangeSort }) => {

  const handlerSort = (headline: string) => {
    onChangeSort((prev) => ({
      column: headline,
      direction: prev.direction !== enumDirection.ASC ?
        enumDirection.ASC : enumDirection.DESC
    }));
  }

  const tableTh = Object.keys(headlines).map((headline, index) => {

    return (
      <th key={headline + index}>
        <Button onClick={() => handlerSort(headline)}>
          <>
            <span>{headlines[headline as keyof IHeadlines]}</span>
            {
              <IconDown className={
                sort.direction !== enumDirection.ASC ? styles.iconUp : ""} />}
          </>
        </Button>
      </th>
    )
  })

  const tableTd = posts?.map(({ id, title, body }) => {

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
  });

  return (
    <div className={styles.box}>
      <table>
        <thead>
          <tr>
            {tableTh}
          </tr>
        </thead>
        {!posts?.length ?
          <p>Не найдено!</p> :
          <tbody>
            {tableTd}
          </tbody>}
      </table>
    </div>
  )

}