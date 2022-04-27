import './App.css';
import { Routes, Route } from 'react-router-dom'
import Table from './components/Table';
import Details from './components/Details';
import Cart from './components/Cart';

function App() {

  let cart = []

  return (
    <>
      <h1>Music</h1>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/details/:titel/:jahr" element={<Details cart={cart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
