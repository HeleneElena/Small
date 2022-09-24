import style from './Logo.module.css';
import LogoIcon from './img/billboard.png';

export const Logo = () => {
  return ( 
      <a className={style.link} href="/">
          <img className={style.logo__item_img} src={LogoIcon} alt="wtg app-logo"/>
      </a>
  )
};
