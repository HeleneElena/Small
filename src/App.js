import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

function App() {
  
  return (
    <div className="App">
     <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
    </div>
  );
}

export default App;
