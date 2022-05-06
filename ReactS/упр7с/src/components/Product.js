import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'
import { useNavigate } from 'react-router-dom'

function Product(props) {

    const navigate = useNavigate()

    const spalten = [
        [
          [
              {
                  field: "titel",
                  name: "Titel"
              },
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "publisher",
                  name: "Publisher"
              },
              {
                  field: "preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "autor",
                  name: "Autor"
              },
              {
                  field: "titel",
                  name: "Titel"
              },
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "seiten",
                  name: "Seiten"
              },
              {
                  field: "verlag",
                  name: "Verlag"
              },
              {
                  field: "preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "autor",
                  name: "Autor"
              },
              {
                  field: "titel",
                  name: "Titel"
              },
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "laenge",
                  name: "Länge"
              },
              {
                  field: "verlag",
                  name: "Verlag"
              },
              {
                  field: "preis",
                  name: "Preis"
              }
          ]
        ],
        [
          [
              {
                  field: "titel",
                  name: "Titel"
              },
              {
                  field: "hersteller",
                  name: "Hersteller"
              },
              {
                  field: "preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "titel",
                  name: "Titel"
              },
              {
                  field: "beschreibung",
                  name: "Beschreibung"
              },
              {
                  field: "preis",
                  name: "Preis"
              }
          ]
        ]
    ]

    return props.detailauswahl &&
        (<>
            <h2>Produktdetails</h2>
            <table>
                <thead>
                    <tr>
                        {
                            spalten[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                return <th>{col.name}</th>
                            })
                        }
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            spalten[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                return <td>{props.detailauswahl[col.field]}{col.field === "preis" && " EUR"}</td>
                            })
                        }
                        <td onClick={() => { props.addToCart(props.detailauswahl) }}>Hinzufügen</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => {
                props.setDetails(null)
                navigate(-1)
            }}>Zurück</button>
        </>)
}

export default connect(mapStateToProps, mapDispatchToProps) (Product);