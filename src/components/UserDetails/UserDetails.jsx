import style from './UserDetails.module.css'
import { ReactComponent as GoBack } from '../../images/back.svg';
import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';
import { useEffect, useState } from "react";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [userAge, setUserAge] = useState('');

  function getAge(year) {
    return moment().diff(moment(year, 'YYYYMMDD'), 'years');
  }
  function pluralize(count, words) {
    var cases = [2, 0, 1, 1, 1, 2];
    return count + ' ' + words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]];
  }
  useEffect(() => {
    setUserAge(pluralize(getAge(localStorage.birthday), ['год', 'года', 'лет']))
  }, []);

  return (
    <>
      <div className={style.user_details_wrapper}>
        <div className={style.user_details_header_wrapper}>
          <GoBack className={style.user_details_back_button} onClick={goBack} />
          <img src={localStorage.avatarUrl} alt="user" className={style.user_details_photo} />
          <div className={style.user_details_name_wrapper}>
            <span className={style.user_details_info_name} >{localStorage.name}</span>
            <span className={style.user_details_info_nickname} >{localStorage.userTag}</span>
          </div>
          <span className={style.user_details_specialty} >{localStorage.position}</span>
        </div>
        <div className={style.user_details_birth}>
          <div className={style.user_details_birthdate_wrapper}>
            <Star className={style.user_details_star} />
            <span className={style.user_details_birthdate}>{
              new Date(localStorage.birthday).toLocaleString("ru", {
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
          <a href={'tel:' + localStorage.phone} className={style.user_details_phone_number}>{localStorage.phone}</a>
        </div>
      </div>
    </>
  );
}

export default UserDetails;

