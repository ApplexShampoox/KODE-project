
import { useState } from 'react';
import RadioSwitcher from './RadioSwitcher/RadioSwitcher';
import style from './Modal.module.css'
import { ReactComponent as CloseModal } from '../../images/close_modal.svg';

const Modal = (props) => {
  const [favorite, setFavorite] = useState("По алфавиту");
  function handleChange(e) {
    setFavorite(e.target.id);
  }
  if (!props.show) {
    return null
  }

  return (
    <>
      <div className={style.modal} onClick={props.onClose}>
        <div className={style.modal_content} onClick={e => e.stopPropagation()}>
          <div className={style.modal_top_block}>
            <span className={style.sorting}>Сортировка</span>
            <CloseModal className={style.close_modal} onClick={props.onClose} />
          </div>
          <div className={style.checkbox_group}>
            <RadioSwitcher
              id="По алфавиту"
              label="По алфавиту"
              checked={favorite === 'По алфавиту'}
              onChange={handleChange}
            />
            <RadioSwitcher
              id="По дню рождения"
              label="По дню рождения"
              checked={favorite === 'По дню рождения'}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;