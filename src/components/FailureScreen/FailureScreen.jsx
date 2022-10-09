import style from './FailureScreen.module.css'
const FailureScreen = ({ src, description, advice, error }) => {
  return (
    <>
      <div className={style.failure_screen_wrapper}>
        <div className={style.failure_screen}>
          <img alt="failure" src={src} className={style.failure_screen_img} />
          <span className={style.failure_screen_description}>{description}</span>
          <span className={style.failure_screen_advice}>{advice}</span>
          {Boolean(error) && <a href="/" className={style.failure_screen_link}>Попробовать снова</a>}
        </div>
      </div>
    </>
  );
}

export default FailureScreen;