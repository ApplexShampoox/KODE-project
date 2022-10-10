
import style from './UserCard.module.css'
const UserCard = ({ src, name, nickname, specialty, birthday }) => {
  return (
    <div className={style.user_card_wrapper} >
      <div className={style.user_card}>
        <div className={style.user_photo_wrapper}>
          <img src={src + '&rnd=' + Math.floor(Math.random() * 20000)} alt="user" width="72" height="72" className={style.user_photo} />
        </div>

        <div className={style.user_info}>
          <div className={style.user_header}>
            <span className={style.user_name}>{name}</span>
            <span className={style.user_nickname}>{nickname}</span>
          </div>
          <span className={style.user_specialty}>{specialty}</span>
        </div>
      </div>
      <span className={style.user_birthday}>{birthday}</span>
    </div>
  );
}

export default UserCard;