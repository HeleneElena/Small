import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../Layouts/Layout/Layout';
import style from './EventFullPage.module.css';
import { API_URI } from '../../assets/const';
import axios from 'axios';

export const EventFullPage = () => {
  const [eventPage, setEventPage] = React.useState([]);
  const { id } = useParams();
  React.useEffect(() => {
    const fetchEventPage = async (page) => {
      const { data } = await axios(`${API_URI}/events/${page}`);
      setEventPage(data);
    };
    fetchEventPage(id);
  }, [id]);
  const { description, linkImage, startDatetime, title, price } = eventPage;

  const cost = price ? `Цена: ${price} рублей` : 'Вход бесплатный';
  return (
    <Layout>
      <h4 className={style.title}>{title}</h4>
      <div className={style.cart}>
        <div className={style.leftContent}>
          <p className={style.distance}>Расстояние 25,7 км</p>
          <img
            src={linkImage ? linkImage.split('|')[0] : null}
            alt={`изображение ${title}`}
            width={540}
            height={418}
          />
          <div className={style.enter}>
            <p className={style.date}>{startDatetime}</p>
            <p className={style.censure}>Без возрaстных ограничений</p>
            <p className={style.price}>{cost}</p>
          </div>
        </div>
        <div className={style.rightContent}>
          <div className={style.rightHeader}>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M15.9999 22.6667L5.33325 29.3334V5.33341C5.33325 4.62617 5.6142 3.94789 6.1143 3.4478C6.6144 2.9477 7.29267 2.66675 7.99992 2.66675H23.9999C24.7072 2.66675 25.3854 2.9477 25.8855 3.4478C26.3856 3.94789 26.6666 4.62617 26.6666 5.33341V29.3334L15.9999 22.6667Z'
                stroke='black'
              />
            </svg>

            <span className={style.review}>Отзывы 999</span>
          </div>
          <p className={style.adress}>
            ​Горная, 1 <br />
            ДНП Предгорье, х. Молькин, Горячий Ключ городской округ,
            Краснодарский край
          </p>
          <p className={style.description}>{description}</p>
        </div>
      </div>
    </Layout>
  );
};
