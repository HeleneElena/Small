import React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';
import { useNavigate } from 'react-router-dom'

function Table(props) {

    const spalten = [
        [
          [
              {
                  field: "Titel",
                  name: "Titel"
              },/* 
              {
                  field: "Jahr",
                  name: "Jahr"
              },
              {
                  field: "Publisher",
                  name: "Publisher"
              }, */
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
              },/* 
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
              }, */
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
              },/* 
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
                  field: "Hersteller",
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
                  field: "Beschreibung",
                  name: "Beschreibung"
              }, */
              {
                  field: "Preis",
                  name: "Preis"
              }
          ]
        ]
    ]

    const navigate = useNavigate()  
    
    const currentSubCat = props.subcats.find((ele) => {
        return ele.maincat == props.formular.hauptkategorie &&
            ele.subcat == props.formular.unterkategorie
    })

    return (
        <>
            {
                props.formular.hauptkategorie != "-1" &&
                props.formular.unterkategorie != "-1" &&
                (<div>
                    <h2>{currentSubCat.name}</h2>
                    <table>
                        <thead>
                            <tr>
                                {
                                    spalten[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                        return <th key={col.field}>{col.name}</th>
                                    })
                                }
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.artikel.map((ele) => {
                                    return ele.maincat == props.formular.hauptkategorie &&
                                    ele.subcat == props.formular.unterkategorie ?
                                    (<tr key={ele.id}>
                                        {
                                            spalten[props.formular.hauptkategorie][props.formular.unterkategorie].map((col) => {
                                                return <td key={col.field}>{ele[col.field]}{col.field == "Preis" && " EUR"}</td>
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
                </div>)
            }
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps) (Table);