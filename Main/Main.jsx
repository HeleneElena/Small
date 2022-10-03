import style from './Main.module.css';
import Location from './Location/Location';
import Tabs from './Tabs/Tabs';
import { EventSelection } from './EventSelection/EventSelection'; 
import Layout from '../Layout';  


const Main = () => {
  return (
    <main className={style.main}>
        <Layout>
        <Tabs/>
        <Location/>
        <EventSelection/> 
      </Layout> 
    </main>
  );
};

export default Main;