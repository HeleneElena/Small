import style from './Location2.module.css';
import { ReactComponent as SearchSvg} from '../img/search.svg';
import banner from '../img/banner.jpg';
import { TextLocation } from './TextLocation/TextLocation';

export const Location2 = () => {
  return (
    <>
      <img className={style.img} src={banner}/>
      <h3 className={style.title}>лОКация</h3>
      <div className={style.wrapper}>
        <input 
          type="text" 
          name="name" 
          className={style.search}
        >
        </input>
        <SearchSvg className={style.svgSearch} width={60} height={70}/>
      </div>
      <TextLocation />
    </>
  );
};