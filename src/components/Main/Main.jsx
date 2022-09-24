import Layout from '../Layout';
import style from './Main.module.css';
import Location from './Location/Location';
import Tabs from './Tabs/Tabs';


const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
          <Tabs/>
          <Location/>
      </Layout>
    </main>
  );
};

export default Main;