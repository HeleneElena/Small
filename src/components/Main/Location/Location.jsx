import style from './Location.module.css';
import slide_1 from './img/slide_1.jpg';
import slide_2 from './img/slide_2.jpg';
import slide_3 from './img/slide_3.jpg';
import slide_4 from './img/slide_4.jpg';
import { Search } from './Search/Search';
import Container from '../../Container/Container';
import { useState } from 'react';
import { Location2 } from './Location2/Location2';

const Location = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Container> 
        <Search />
          <ul className={style.locations__gallery}>
            <li className={style.locations__img_wrapper} onClick={handleClick}>
                <img className={style.locations__img} src={slide_1} alt="Krasnodar triumphal arch"></img>
            </li>
            <li className={style.locations__img_wrapper} onClick={handleClick}>
                <img className={style.locations__img} src={slide_2} alt="Krasnodar nature landscape"></img>
            </li>
            <li className={style.locations__img_wrapper} onClick={handleClick}>
                <img className={style.locations__img} src={slide_3} alt="mountain river landscape"></img>
            </li>
            <li className={style.locations__img_wrapper} onClick={handleClick}>
                <img className={style.locations__img} src={slide_4} alt="park landscape"></img>
            </li>
        </ul>
      </Container> 
      {
        openModal && <Location2 closeModal={() => setOpenModal(false)}/>
      }
  </>
);
};

export default Location;