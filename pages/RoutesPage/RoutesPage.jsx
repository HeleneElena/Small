import style from './RoutesPage.module.css';
import { ReactComponent as FirstStar } from '../../components/Main/Location/Location2/img/FirstStar.svg';
import { ReactComponent as ThirdStar } from '../../components/Main/Location/Location2/img/ThirdStar.svg';
import { ReactComponent as Favorites } from '../../components/Main/Location/Location2/img/Favorites.svg';
import { ReactComponent as Share} from '../../components/Main/Location/Location2/img/Share.svg';
import Container from '../../components/Container/Container';
import Map from './img/map.jpg';


export const RoutesPage = () => {
  return (
    <Container>
      <div className={style.routes}>
        <h2 className={style.title}>Исторический Краснодар (пеший)</h2>
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
            <p className={style.score}>78</p>
          </div>
        </div>
      </div>
      <img src={Map} alt='Карта' className={style.map} />
    </Container>
  );
};
