import style from './CardLocation.module.css';
import FotoLocation from '../img/FotoLocation.jpg';

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

export const CardLocation = ({address, linkSite, workTimeStart, workTimeEnd}) => (
    <>
      <div className={style.wrapper}>
          <div className={style.img}>
            <p className={style.distance}>Расстояние: 15,3 км</p>
            <img src={FotoLocation} width = {774} height = {564} alt='место события'></img>
          </div>
          <div className={style.content}> 
            <p className={style.address}>Россия, {address}</p>
            <a className={style.link} href="/">Источник: {linkSite} </a>
            <div className={style.reviewsScope}>
              <p className={style.reviews}>Крутая скейт площадка!!!</p>
            </div>
            <p className={style.reviews}>График работы: c {workTimeStart}  до {workTimeEnd} </p>
            <p className={style.reviews}>Возрастные ограничения: Без возрастных ограничений</p>
            <p className={style.reviews}>Цена: бесплатно </p>
          </div>
      </div>
    </>
  );