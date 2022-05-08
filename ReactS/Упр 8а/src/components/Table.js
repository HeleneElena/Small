import React from 'react';
import { connect } from 'react-redux'
import mapStateToProps from '../redux/mapStateToProps'
import mapDispatchToProps from '../redux/mapDispatchToProps'
import { useNavigate } from 'react-router-dom'

function Table(props) {

    const navigate = useNavigate()

    const spalten = [
        [
          [
              {
                  field: "Titel",
                  name: "Titel"
              },/* 
              {
                  field: "jahr",
                  name: "Jahr"
              },
              {
                  field: "publisher",
                  name: "Publisher"
              }, */
              {
                  field: "Preis",
                  name: "Preis"
              }
          ],
          [/* 
              {
                  field: "autor",
                  name: "Autor"
              }, */
              {
                  field: "Titel",
                  name: "Titel"
              },/* 
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
              }, */
              {
                  field: "Preis",
                  name: "Preis"
              }
          ],
          [/* 
              {
                  field: "autor",
                  name: "Autor"
              }, */
              {
                  field: "Titel",
                  name: "Titel"
              },/* 
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
              }, */
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
              },/* 
              {
                  field: "hersteller",
                  name: "Hersteller"
              }, */
              {
                  field: "Preis",
                  name: "Preis"
              }
          ],
          [
              {
                  field: "Titel",
                  name: "Titel"
              },/* 
              {
                  field: "beschreibung",
                  name: "Beschreibung"
              }, */
              {
                  field: "Preis",
                  name: "Preis"
              }
          ]
        ]
    ]

    const currentSubCat = props.subcats.find((ele) => {
        return ele.maincat === props.formular.hauptkategorie &&
            ele.subcat === props.formular.unterkategorie
    })

    return (
        <>
            {
                props.formular.hauptkategorie != "-1" && props.formular.unterkategorie != "-1" &&
                <div>
                    <h2>{currentSubCat.name}</h2>
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
                            {
                                props.artikel.map((ele) => {
                                    return ele.maincat === props.formular.hauptkategorie &&
                                        ele.subcat === props.formular.unterkategorie ?
                                    (<tr>
                                        {
                                            spalten[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                                return <td>{ele[col.field]}{col.field === "Preis" && " EUR"}</td>
                                            })
                                        }
                                        <td onClick={() => {
                                            props.setDetails(ele)
                                            navigate("/product")
                                        }}>Details</td>
                                    </tr>)
                                    : <></>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Table);