import style from './Header.module.css';
import {Logo} from './Logo/Logo';
import {Auth} from './Auth/Auth';
import Container from '../Container/Container';

export const Header = () => {

  return (
    <header className={style.header} id="header">
      <Container>
        <div className={style.container}>
            <Logo/>
            <Auth/>
        </div>
      </Container>
    </header>
  )
};
