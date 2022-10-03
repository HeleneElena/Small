import { assignId} from '../../../utils/generateRandomID';
import { Text } from '../../../UI/Text';
import style from './Tabs.module.css';
import Container from './../../Container/Container';

const MENU = [
  {value: 'События', link: '#events'},
  {value: 'Локации', link: '#locations'},
  {value: 'Маршруты', link: '#routes'},
  {value: 'Отдых', link: '#rest'},
  {value: 'Наша команда', link: '#team'},
].map(assignId);

const Tabs = () => {
  return (
    <Container> 
      <nav className={style.header__navigation}>
        <ul className={style.navigation__list}>
          {
            MENU.map(({value, id, link}) => {
              return (
              <Text As='li' key={id} className={style.navigation__link}>
                <Text As='a' href={link}>{value}</Text>
              </Text>
            )})
          }
        </ul>
      </nav>
    </Container>
  );
};

export default Tabs;
