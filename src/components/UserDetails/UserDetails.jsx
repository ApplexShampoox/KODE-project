import style from './UserDetails.module.css'
import { ReactComponent as GoBack } from '../../images/back.svg';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';

import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
const src = "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=ios";

const UserDetails = ({ name, nickname, specialty, birthday, phone }) => {

  const [list, setList] = useState({});
  const [userAge, setUserAge] = useState('');
  function getAge(year) {
    let age = moment().diff(moment(year, 'YYYYMMDD'), 'years');
    let age_ru = null;


    switch (age.toString().slice(-1)) {
      case '0':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        age_ru = age + ' лет'
        break;

      case '1':
        age_ru = age + ' год'
        break;

      case 2:
      case 3:
      case 4:
        age_ru = age + ' года'
        break;
      default:
        age_ru = 'возраст неизвестен'
    }
    return age_ru
  }

  useEffect(() => {

    axios
      .get(src)
      .then(data => setList(data.data.items[0]))
      .then(setUserAge(getAge(list.birthday)))
  }, [list.birthday]);



  return (
    <>
      <div className={style.user_details_wrapper}>

        <div className={style.user_details_header_wrapper}>
          <GoBack className={style.user_details_back_button} />
          <img src={list.avatarUrl} alt="user" className={style.user_details_photo} />

          <div className={style.user_details_name_wrapper}>
            <span className={style.user_details_info_name} >{list.firstName + " " + list.lastName}</span>
            <span className={style.user_details_info_nickname} >{list.userTag}</span>
          </div>
          <span className={style.user_details_specialty} >{list.position}</span>
        </div>

        <div className={style.user_details_birth}>
          <div className={style.user_details_birthdate_wrapper}>
            <Star className={style.user_details_star} />
            <span className={style.user_details_birthdate}>{
              new Date(list.birthday).toLocaleString("ru", {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
                timezone: 'UTC'
              }).slice(0, -3)
            }</span>
          </div>

          <span className={style.user_details_age}>{userAge}</span>
        </div>
        <div className={style.user_details_phone_wrapper}>
          <Phone className={style.user_details_phone} />
          <span className={style.user_details_phone_number}>{list.phone}</span>
        </div>
      </div>
    </>
  );
}

export default UserDetails;