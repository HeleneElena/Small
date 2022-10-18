import style from './Location2.module.css';
import { TextLocation } from './TextLocation/TextLocation';

export const Location2 = () => {

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <div className={style.wrapperH3}>
          <h3 className={style.title}>лОКация</h3>
        </div>      
        <TextLocation />
      </div>
    </div>
  );
};
