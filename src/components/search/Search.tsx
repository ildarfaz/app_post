import { FC } from 'react'
import styles from './search.module.scss'
import { ReactComponent as IconSearch } from '../../assets/img/search.svg'

interface ISearch {
  onSearch: (data: string) => void;
  onChangePage: (data: number) => void;
}

export const Search: FC<ISearch> = ({ onSearch, onChangePage}) => {

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
    onChangePage(1);
  }

  return (
    <div className={styles.box}>
      <div className={styles.inner}>
        <input placeholder='Поиск' onChange={handlerChange} />
        <div className={styles.icon}>
          <IconSearch />
        </div>
      </div>
    </div>
  );
}