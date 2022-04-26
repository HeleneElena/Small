import './App.css';
import { Routes, Route } from 'react-router-dom'
import Table from './components/Table';
import Details from './components/Details';

function App() {
  return (
    <>
      <h1>Music</h1>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/details/:titel/:jahr" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
