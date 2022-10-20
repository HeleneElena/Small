import style from './Main.module.css';
import Location from '../../components/Main/Location/Location';
import EventSelection from '../../components/Main/EventSelection';
import Layout from '../../Layouts/Layout';
import Events from '../../components/Main/Events';
import Routes from '../../components/Routes/Routes';

const Main = ({ searchValue, setSearchValue }) => {
  return (
    <main className={style.main}>
      <Layout>
        <Events />
        <Location searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes searchValue={searchValue} setSearchValue={setSearchValue} />
        <EventSelection />
      </Layout>
    </main>
  );
};

export default Main;
