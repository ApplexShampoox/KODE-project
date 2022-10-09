
import style from './SkeletonCard.module.css'
const SkeletonCard = () => {
  return (
    <div className={style.skeleton_card_wrapper} >
      <div className={style.skeleton_card}>
        <span className={style.skeleton_photo} />
        <div className={style.skeleton_info}>
          <div className={style.skeleton_header}>
            <span className={style.skeleton_name}></span>
          </div>
          <span className={style.skeleton_specialty}></span>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;