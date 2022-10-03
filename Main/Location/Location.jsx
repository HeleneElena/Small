import style from './Location.module.css';
import slide_1 from './img/slide_1.jpg';
import slide_2 from './img/slide_2.jpg';
import slide_3 from './img/slide_3.jpg';
import slide_4 from './img/slide_4.jpg';
import { Search } from './Search/Search';
import Container from '../../Container/Container';
import { assignId } from '../../../utils/generateRandomID';
import { Text } from '../../../UI/Text';
import { Location2 } from './Location2/Location2';

const LIST = [
  {src: slide_1, alt: 'Krasnodar triumphal arch'},
  {src: slide_2, alt: 'Krasnodar nature landscape'},
  {src: slide_3, alt: 'Mountain river landscape'},
  {src: slide_4, alt: 'Park landscape'},
].map(assignId);

const Location = () => {
  return (
    <>
      <Container> 
        <Search />
        <ul className={style.locations__gallery}>
        {
            LIST.map(({src, id, alt}) => {
              return (
              <Text As='li' key={id} className={style.locations__img_wrapper}>
                <img className={style.locations__img} src={src} alt={alt}></img>
              </Text>
            )})
        }
        </ul>
      </Container> 
    </>
  )
};

export default Location;