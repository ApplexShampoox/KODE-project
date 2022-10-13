import RadioSwitcher from './RadioSwitcher/RadioSwitcher';
import style from './Modal.module.css'
import { ReactComponent as CloseModal } from '../../images/close_modal.svg';

const Modal = ({ onClose, favorite, show, onChange }) => {

  if (!show) {
    return null
  }

  return (
    <>
      <div className={style.modal} onClick={onClose}>
        <div className={style.modal_content} onClick={e => e.stopPropagation()}>
          <div className={style.modal_top_block}>
            <span className={style.sorting}>Сортировка</span>
            <CloseModal className={style.close_modal} onClick={onClose} />
          </div>
          <div className={style.checkbox_group}>
            <RadioSwitcher
              id="ByAlphabet"
              label="По алфавиту"
              checked={favorite === "ByAlphabet"}
              onChange={onChange}
            />
            <RadioSwitcher
              id="ByBirthday"
              label="По дню рождения"
              checked={favorite === "ByBirthday"}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;