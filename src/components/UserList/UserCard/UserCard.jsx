import mock from '../../../images/mock.png'
import style from './UserCard.module.css'
const UserCard = () => {
  return (
    <div className={style.user_card_wrapper}>
      <div className={style.user_card}>
        <img src={mock} alt="user" width="72" height="72" className={style.user_photo} />
        <div className={style.user_info}>
          <div className={style.user_header}>
            <span className={style.user_name}>Павел Волков</span>
            <span className={style.user_nickname}>vp</span>
          </div>
          <span className={style.user_specialty}>Art–Director</span>
        </div>
      </div>
      <span className={style.user_birthday}>5 июн</span>
    </div>
  );
}

export default UserCard;