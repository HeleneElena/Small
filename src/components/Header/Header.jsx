import style from './Header.module.css';
import {Logo} from './Logo/Logo';
import {Auth} from './Auth/Auth';

export const Header = () => {

  return (
    <header className={style.header} id="header">
        <div className={style.container}>
            <Logo/>
            <Auth/>
        </div>
    </header>
  )
};
