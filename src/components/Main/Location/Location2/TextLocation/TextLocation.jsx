import style from './TextLocation.module.css';
import { ReactComponent as FirstStar} from '../img/FirstStar.svg';
import { ReactComponent as ThirdStar} from '../img/ThirdStar.svg';

export const TextLocation = () => {
  return (
    <>
      <h2 className={style.title}>Скейт парк в парке Галицкого</h2>
      <div className={style.raiting}>
        <p className={style.assesment}>Оценка</p>
        <p className={style.score}>4,9</p>
          <ul className={style.list}>
          <li className={style.star}><FirstStar width={38} height={38}/></li>
          <li className={style.star}><ThirdStar width={38} height={38}/></li>
          <li className={style.star}><ThirdStar width={38} height={38}/></li>
          <li className={style.star}><ThirdStar width={38} height={38}/></li>
          <li className={style.star}><ThirdStar width={38} height={38}/></li>
        </ul>
      </div>
    </>
  );
};