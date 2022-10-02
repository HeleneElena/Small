// import { Routes, Route, Link } from 'react-router-dom';
import Container from './components/Container/Container';
import Footer from './components/Footer';
import { Location2 } from './components/Main/Location/Location2/Location2';
import './index.css';

{/*  import Main from './components/Main/Main';
import Header from './components/Header'; */}

function App() {

  // const [modalActive, setModalActive] = useState(true);

  return (
      <>
        {/*  <Header />
        <Main /> */}
          <Location2/>      
        <Footer />
      </>
  );
}

export default App;
