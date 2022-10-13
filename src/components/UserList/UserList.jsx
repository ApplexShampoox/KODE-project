import style from './UserList.module.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import UserCard from "./UserCard/UserCard";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import NetworkError from "./../FailureScreen/NetworkError";


const UserList = ({ src }) => {
  const [list, setList] = useState([]);
  const [beforeList, setBeforeList] = useState([]);
  const [afterList, setAfterList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // сортировка по алфавиту
  const sortByAlphabet = () => {
    const listCopy = [...list];
    listCopy.sort((userA, userB) => {
      const fullNameA = `${userA.firstName} ${userA.lastName}`;
      const fullNameB = `${userB.firstName} ${userB.lastName}`;
      return fullNameA.localeCompare(fullNameB);
    });
    setList(listCopy);
  }


  // сортировка по дате рождения
  const sortByBirthday = () => {
    const listCopy = [...list];
    const before = [];
    const after = [];
    function compare(a, b) {
      let d1 = new Date(a.birthday);
      let d2 = new Date(b.birthday);
      if (d1.getUTCMonth() > d2.getUTCMonth()) {
        return 1;
      } else if (d1.getUTCMonth() < d2.getUTCMonth()) {
        return -1;
      } else {
        return d1.getUTCDate() - d2.getUTCDate();
      }
    }
    listCopy.sort(compare);
    listCopy.forEach(e => (new Date(e.birthday).getDate() < new Date().getDate()) && (new Date(e.birthday).getMonth() < new Date().getMonth()) ? before.push(e) : after.push(e));
    setBeforeList(before);
    setAfterList(after);
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(src)
      .then(data => {
        setList(data.data.items);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
      })
  }, [src]);

  // вывод ошибки
  if (error) {
    return <NetworkError />
  };
  // вывод скелетона
  if (loading) {
    return (
      <>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </>
    )
  };

  if (localStorage.favorite === "ByAlphabet") {

    return (
      <>
        <button onClick={sortByBirthday} className={style.sortBtn}>Sort</button>
        {
          beforeList.map(user => {
            return (
              <UserCard
                key={user.id}
                src={user.avatarUrl}
                name={user.firstName + " " + user.lastName}
                nickname={user.userTag}
                specialty={user.position}
                phone={user.phone}
                fullBirthday={user.birthday}
                birthday={new Date(user.birthday).toLocaleString("ru", {
                  month: 'short',
                  day: 'numeric',
                  timezone: 'UTC'
                }).slice(0, -1)} />
            );
          }
          )
        }

        <span className={style.current_year}>2023</span>

        {
          afterList.map(user => {
            return (
              <UserCard
                key={user.id}
                src={user.avatarUrl}
                name={user.firstName + " " + user.lastName}
                nickname={user.userTag}
                specialty={user.position}
                phone={user.phone}
                fullBirthday={user.birthday}
                birthday={new Date(user.birthday).toLocaleString("ru", {
                  month: 'short',
                  day: 'numeric',
                  timezone: 'UTC'
                }).slice(0, -1)} />
            );
          }
          )
        }
      </>
    )
  };
  if (localStorage.favorite === "ByBirthday") {
    return (
      <>
        <button onClick={sortByAlphabet} className={style.sortBtn}>Sort</button>

        {
          list.map(user => {
            return (
              <UserCard
                key={user.id}
                src={user.avatarUrl}
                name={user.firstName + " " + user.lastName}
                nickname={user.userTag}
                specialty={user.position}
                phone={user.phone}
                fullBirthday={user.birthday}
                birthday={new Date(user.birthday).toLocaleString("ru", {
                  month: 'short',
                  day: 'numeric',
                  timezone: 'UTC'
                }).slice(0, -1)} />
            );
          }
          )
        }
      </>)
  }

}
export default UserList;