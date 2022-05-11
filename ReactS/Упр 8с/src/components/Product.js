import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'

function Product(props) {

    const spalten = [
        [
          [
              {
                  field: "Titel",
                  name: "Titel"
              },
              {
                  field: "Jahr",
                  name: "Jahr"
              },
              {
                  field: "Publisher",
                  name: "Publisher"
              },
              {
                  field: "Preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "Autor",
                  name: "Autor"
              },
              {
                  field: "Titel",
                  name: "Titel"
              }, 
              {
                  field: "Jahr",
                  name: "Jahr"
              },
              {
                  field: "Seiten",
                  name: "Seiten"
              },
              {
                  field: "Verlag",
                  name: "Verlag"
              },
              {
                  field: "Preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "Autor",
                  name: "Autor"
              },
              {
                  field: "Titel",
                  name: "Titel"
              },
              {
                  field: "Jahr",
                  name: "Jahr"
              },
              {
                  field: "Länge",
                  name: "Länge"
              },
              {
                  field: "Verlag",
                  name: "Verlag"
              },
              {
                  field: "Preis",
                  name: "Preis"
              }
          ]
        ],
        [
          [
              {
                  field: "Titel",
                  name: "Titel"
              },
              {
                  field: "Hersteller",
                  name: "Hersteller"
              },
              {
                  field: "Preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "Titel",
                  name: "Titel"
              }, 
              {
                  field: "Beschreibung",
                  name: "Beschreibung"
              },
              {
                  field: "Preis",
                  name: "Preis"
              }
          ]
        ]
    ]

    const navigate = useNavigate()

    if (!props.detailauswahl) {
        navigate("/")
    }

    return props.detailauswahl ?
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
                                return <td>{props.detailauswahl[col.field]}{col.field == "Preis" && " EUR"}</td>
                            })
                        }
                        <td onClick={() => {props.addToCart(props.detailauswahl)}}>Hinzufügen</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => {navigate(-1)}}>Zurück</button>
        </>)
        : <></>
}

export default connect(mapStateToProps, mapDispatchToProps) (Product);