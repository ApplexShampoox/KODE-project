import style from './Navigation.module.css'
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as SearchParams } from '../../images/search_parameters.svg';

const Navigation = () => (

  <nav className={style.navigation}>
    <h2>Поиск</h2>
    <div className={style.input_group}>
      <SearchIcon className={style.search_icon} />
      <input
        type="search"
        name="search"
        className={style.input_search}
        placeholder="Введи имя, тег, почту..."
      />
      <SearchParams className={style.search_params} />
    </div>
  </nav >
);

export default Navigation;