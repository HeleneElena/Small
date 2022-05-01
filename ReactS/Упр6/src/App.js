import React, { useState, useEffect } from 'react'
import { BASE_URL } from './assets/baseURL'
import axios from 'axios'
import './App.css';

function App() {

  const [games, setGames] = useState([])

  useEffect(() => {

    axios.get(`${BASE_URL}/spiele`)
      .then((response) => {
        setGames(response.data)
      })
  }, [])

  return (
    <>
      <form>
        <h3></h3>
        <input type="text" placeholder="Titel" name="titel" />
        <input type="text" placeholder="Jahr" name="jahr" />
        <input type="text" placeholder="Publisher" name="publisher" />
        <input type="text" placeholder="Preis" name="preis" />
        <button></button>
      </form>
      <table>
        <thead>
          <tr>
              <th>Titel</th>
              <th>Jahr</th>
              <th>Publisher</th>
              <th>Preis</th>
              <th></th>
              <th></th>
          </tr>
        </thead>
        <tbody>
          {
            games.map((ele) => {
              return (<tr key={ele.id}>
                <td>{ele.titel}</td>
                <td>{ele.jahr}</td>
                <td>{ele.publisher}</td>
                <td>{ele.preis} EUR</td>
                <td></td>
                <td>Löschen</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
