import style from './TextLocation.module.css';
import { ReactComponent as FirstStar} from '../img/FirstStar.svg';
import { ReactComponent as ThirdStar} from '../img/ThirdStar.svg';
import { ReactComponent as Favorites} from '../img/Favorites.svg';
import { ReactComponent as Share} from '../img/Share.svg';
import { CardLocation } from '../CardLocation/CardLocation';

const DATA = [
  {
  "id": 1,
      "title": "Скейт парк",
      "description": "Короткое описание",
      "fullDescription": "Полное описание",
      "address": "Школьный м-н, Прикубанский округ, Краснодар",
      "workTimeStart": "2022-08-16T09:00:00",
      "workTimeEnd": "2022-08-16T19:00:00",
      "workBreakStart": null,
      "workBreakEnd": null,
      "linkImage": "https://i0.photo.2gis.com/images/geo/0/30258560049059317_9c5d.jpg",
      "linkSite": "https://www.culture.ru/",
      "latitude": 45.039703,
      "longitude": 39.030299
  },
];

export const TextLocation = ({title}) => {
  return (
    <>
      <h2 className={style.title}>{title}</h2>
      <div className={style.raiting}>
        <div className={style.wrapper}>
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
        <div className={style.wrapper}>
          <Favorites className={style.favorites} />
          <Share />
          <p className={style.assesment}>Отзывы</p>
          <p className={style.score}>999</p>
        </div>
      </div>
      <CardLocation />
    </>
  );
};