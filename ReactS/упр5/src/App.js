import React, { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Select from './components/Select'
import Table from './components/Table'

function App() {

  const [formular, setzeFormular] = useState({
    hauptkategorie: "-1",
    unterkategorie: "-1"
  })

  function kategorieAendern(event) {
    setzeFormular((currentState) => {
      if (event.target.name === "hauptkategorie") {
        // Hauptkategorie
        return {
          hauptkategorie: event.target.value,
          unterkategorie: "-1"
        }
      } else {
        // Unterkategorie
        return {
          ...currentState,
          unterkategorie: event.target.value
        }
      }
    })
  }

  const [warenkorb, setzeWarenkorb] = useState([])

  function hinzufuegenZumWarenkorb(produkt) {
    setzeWarenkorb((currentState) => {
      return [...currentState, produkt]
    })
  }
  function entfernenVomWarenkorb(i) {
    setzeWarenkorb((currentState) => {
      const newArr = currentState.filter((value, index) => {
        return i != index
      })
      return newArr
    })
  }

  const produkte = [ 
    {
      "name": "Entertainment",
      "gruppe": [
        {
          "name": "Spiele",
          "artikel": [
            {
              "titel": "Donkey Kong",
              "jahr": 1981,
              "publisher": "Nintendo",
              "preis": 99.99
            },
            {
              "titel": "Pac-Man",
              "jahr": 1980,
              "publisher": "Namco",
              "preis": 99.99
            },
            {
              "titel": "Asteroids",
              "jahr": 1979,
              "publisher": "Atari",
              "preis": 99.99
            },
            {
              "titel": "Space Invaders",
              "jahr": 1978,
              "publisher": "Taito",
              "preis": 99.99
            },
            {
              "titel": "Pong",
              "jahr": 1972,
              "publisher": "Atari",
              "preis": 99.99
            }
          ]
        },
        {
          "name": "Bücher",
          "artikel": [
            {
              "autor": "Stephen King",
              "titel": "Carrie",
              "jahr": 1974,
              "seiten": 199,
              "verlag": "Doubleday",
              "preis": 9.99
            },
            {
              "autor": "Stephen King",
              "titel": "The Shining",
              "jahr": 1977,
              "seiten": 447,
              "verlag": "Doubleday",
              "preis": 9.99
            },
            {
              "autor": "Stephen King",
              "titel": "Christine",
              "jahr": 1983,
              "seiten": 526,
              "verlag": "Viking",
              "preis": 14.99
            },
            {
              "autor": "Stephen King",
              "titel": "It",
              "jahr": 1986,
              "seiten": 1138,
              "verlag": "Viking",
              "preis": 19.99
            },
            {
              "autor": "Stephen King",
              "titel": "Misery",
              "jahr": 1987,
              "seiten": 310,
              "verlag": "Viking",
              "preis": 9.99
            },
            {
              "autor": "Stephen King",
              "titel": "Joyland",
              "jahr": 2013,
              "seiten": 288,
              "verlag": "Hard Case Crime",
              "preis": 9.99
            }
          ]
        },
        {
          "name": "Audio-Books",
          "artikel": [
            {
              "autor": "Stephen King",
              "titel": "Bag of Bones",
              "jahr": 2005,
              "laenge": 240,
              "verlag": "Simon & Schuster Audio",
              "preis": 19.99
            },
            {
              "autor": "Stephen King",
              "titel": "On Writing: A Memoir of the Craft",
              "jahr": 2000,
              "laenge": 120,
              "verlag": "Simon & Schuster Audio",
              "preis": 19.99
            },
            {
              "autor": "Stephen King",
              "titel": "Salem's Lot (introduction)",
              "jahr": 2004,
              "laenge": 180,
              "verlag": "Simon & Schuster Audio",
              "preis": 29.99
            }
          ]
        }
      ]
    },
    {
      "name": "Sport",
      "gruppe": [
        {
          "name": "Schuhe",
          "artikel": [
            {
              "titel": "Air Betonfuß",
              "hersteller": "Mike",
              "preis": 149.99
            },
            {
              "titel": "Turtle Light",
              "hersteller": "attitas",
              "preis": 129.99
            },
            {
              "titel": "Royal Classic Loser",
              "hersteller": "Rehbock",
              "preis": 99.99
            }
          ]
        },
        {
          "name": "Geräte",
          "artikel": [
            {
              "titel": "Hantelset 250g",
              "beschreibung": "Kurzhantel, 10 Scheiben",
              "preis": 149.99
            },
            {
              "titel": "Fingerexpander",
              "beschreibung": "Maximallänge 25cm",
              "preis": 149.99
            },
            {
              "titel": "Gymnastikball",
              "beschreibung": "Durchmesser 8,5m",
              "preis": 149.99
            }
          ]
        }
      ]
    }
  ]

  return (
    <div id="container">
      <header>
        <h1>Bücher und Mehr</h1>
      </header>
      <nav className="clearfix">
        <NavLink to="/"><div>Shop</div></NavLink>
        <NavLink to="/cart"><div>Warenkorb ({warenkorb.length})</div></NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={
          <>
            <Select produkte={produkte} formular={formular}
            kategorieAendern={kategorieAendern} />
            <Table produkte={produkte} formular={formular}
            hinzufuegenZumWarenkorb={hinzufuegenZumWarenkorb} />
          </>
        } />
          <Route path="/cart" element={<Cart warenkorb={warenkorb} 
          entfernenVomWarenkorb={entfernenVomWarenkorb} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
