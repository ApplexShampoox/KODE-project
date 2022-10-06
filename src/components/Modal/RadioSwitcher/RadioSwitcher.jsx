import style from './RadioSwitcher.module.css'
const RadioSwitcher = ({ label, checked, onChange, id }) => {
  return (
    <div className={style.radio_switcher}>
      <input id={id} type="radio" checked={checked} onChange={onChange} />
      <label htmlFor={id} className={style.radio_switcher}>
        {label}
      </label>
    </div>
  );
}
export default RadioSwitcher;

