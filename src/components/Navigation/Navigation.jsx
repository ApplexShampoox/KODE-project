import style from './Navigation.module.css'
import { ReactComponent as SearchIcon } from '../../images/search.svg';
import { ReactComponent as SearchParams } from '../../images/search_parameters.svg';
// import { useState } from 'react';


const Navigation = ({ term, onOpen }) => {
  // в процессе написания логики поиска...
  // const [value, setValue] = useState('')
  // const [userList, setUserList] = useState(data);
  // // const [searchWord, setSearchWord] = useState('');
  // const dataSearch = e => {
  //   const value = e.target.value.toLowerCase();

  //   const filter = data.filter(user => {
  //     return user.firstName.toLowerCase().includes(value) ||
  //       user.lastName.toLowerCase().includes(value) ||
  //       user.userTag.toLowerCase().includes(value)
  //   })

  //   update({

  //   })
  // };
  return (
    <nav className={style.navigation}>
      <h2>Поиск</h2>
      <div className={style.input_group}>
        <SearchIcon className={style.search_icon} />
        <input
          type="search"
          name="search"
          className={style.input_search}
          placeholder="Введи имя, тег, почту..."
          value={term}
        // onChange={(e) => setValue(e.target.value)}
        />
        <SearchParams className={style.search_params} onClick={onOpen} fill={localStorage.favorite === "ByBirthday" ? "#C3C3C6" : "#6534FF"} />
      </div>
    </nav >)
};

export default Navigation;