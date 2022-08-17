import Table from './components/Table';

import './App.css';


function App() {

  const books = [
    {
      'id': 1,
      'Autor': 'Достоевский',
      'Seiten': 259,
      'Title': 'Рассказы',
      'Jahr': 1985,
    },
    {
      'id': 2,
      'Autor': 'Харвуд',
      'Seiten': 568,
      'Title': 'Тьма в хрустальной туфельке',
      'Jahr': 2018,
    },
    {
      'id': 3,
      'Autor': 'Баранов',
      'Seiten': 258,
      'Title': 'История',
      'Jahr': 2015,
    },
    {
      'id': 4,
      'Autor': 'Куглер',
      'Seiten': 259,
      'Title': 'День на природе',
      'Jahr': 2005,
    },
    {
      'id': 5,
      'Autor': 'Тумзер',
      'Seiten': 259,
      'Title': 'Новогодний сюрприз',
      'Jahr': 2020,
    },

  ]

  return (
    <div className="App">
      <h2>Bücher</h2>
      <Table bookList={books} />
    </div>
  );
}

export default App;
