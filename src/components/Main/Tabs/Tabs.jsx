import { assignId } from '../../../utils/generateRandomID';
import style from './Tabs.module.css';
import Container from './../../Container/Container';

const MENU = [
  {value: 'События', link: '#events'},
  {value: 'Локации', link: '#locations'},
  {value: 'Маршруты', link: '#routes'},
  {value: 'Отдых', link: '#rest'},
  {value: 'Наша команда', link: '#team'},
].map(assignId);

export const Tabs = () => {
  return (
    <Container> 
      <nav className={style.header__navigation}>
        <ul className={style.navigation__list}>
          {
            MENU.map(({value, id, link}) => {
              return (
              <li key={id} className={style.navigation__link}>
                <a href={link}>{value}</a>
              </li>
            )})
          }
        </ul>
      </nav>
    </Container>
  );
};
