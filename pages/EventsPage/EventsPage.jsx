import { Slider } from '../../components/Slider/Slider';
import style from './EventsPage.module.css';

export const EventsPage = () => {
    return (
        <>
          <p className={style.title}>Здесь события</p>
          <Slider />
        </>
    );
};
