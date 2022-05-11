import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/mapStateToProps';
import mapDispatchToProps from '../redux/mapDispatchToProps';

function Admin(props) {

    // Spaltendefinition
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

    /*************************
    * LOGIN FORMULAR
    *************************/
    const [loginFormular, setzeLoginFormular] = useState({
        username: "",
        passwort: ""
    })
    function formulareingabe(event) {
        setzeLoginFormular((currentState) => {
            return {
                ...currentState,
                [event.target.name]: event.target.value
            }
        })
    }
    function fomularLeeren() {
        setzeLoginFormular({
            username: "",
            passwort: ""
        })
    }

    /*************************
    * LOGIN / LOGOUT
    *************************/
    const admin = useRef(null)

    function logIn() {
        const user = props.users.find((value) => {
            return value.username === loginFormular.username &&
                value.password === loginFormular.passwort
        })
        if (user) {
            admin.current = user
            props.setLoginStatus(true)
        } else {
            admin.current = null
            fomularLeeren()
            props.setLoginStatus(false)
        }
    }
    function logOut() {
        admin.current = null
        fomularLeeren()
        props.setLoginStatus(false)
    }

    /*************************
    * ADMIN-BEREICH
    *************************/
    // Status Admin-Bereich (Liste, Bearbeiten, Neu)
    const [adminStatus, setzeAdminStatus] = useState("liste")

    // Kopie der Artikelliste
    const [artikellisteKopie, setzeArtikellisteKopie] = useState([])
    // Update der Artikelliste (nach dem Laden) 
    useEffect(() => {
        setzeArtikellisteKopie([...props.artikel])
    }, [props.artikel])
    // Sortierung
    const sort = useRef("keine")

    // Kopie des Artikels
    const artikelKopie = useRef(null)

    // Index des Edit-Feldes
    const [editIndex, setzeEditIndex] = useState("-1")

    // Input-Ref
    const editInput = useRef()

    // Liste sortieren
    function sortiere() {
        let testArr = [...artikellisteKopie]
        testArr.sort((a, b) => {
            if (a.Titel < b.Titel) {
                return -1;
            }
            if (a.Titel > b.Titel) {
                return 1;
            }
            return 0;
        })
        setzeArtikellisteKopie((currentState) => {
            if (sort.current === "keine" || sort.current === "absteigend") {
                sort.current = "aufsteigend"
                return [...currentState.sort((a, b) => {
                    if (a.Titel < b.Titel) {
                        return -1;
                    }
                    if (a.Titel > b.Titel) {
                        return 1;
                    }
                    return 0;
                })]
            } else {
                sort.current = "absteigend"
                return [...currentState.sort((a, b) => {
                    if (a.Titel < b.Titel) {
                        return 1;
                    }
                    if (a.Titel > b.Titel) {
                        return -1;
                    }
                    return 0;
                })]
            }
        })
    }

    // Formular-State für Kategorieauswahl (neuer Artikel)
    const [formular, setzeFormular] = useState({
        hauptkategorie: "-1",
        unterkategorie: "-1"
      }) 
    // Kategorieauswahl ändern
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

    // Artikel-State (neuer Artikel)
    const [artikel, setzeArtikel] = useState({})     
    // Artikel-State initialisieren (bei Kategorieauswahl)
    useEffect(() => {
        if (formular.hauptkategorie != "-1" && formular.unterkategorie != "-1") {
            let neuObj = {}
            spalten[formular.hauptkategorie][formular.unterkategorie].forEach((ele) => {
                neuObj[ele.field] = ""
            })
            setzeArtikel({...neuObj})
        }
    }, [formular])

    //
    function eingabeNeu(event) {
        setzeArtikel((currentState) => {
                return {
                    ...currentState,
                    [event.target.name]: event.target.value
                }
        })
    }

    // Neuer Artikel speichern
    function speichernNeu() {
        props.newArticle({
            "maincat": formular.hauptkategorie,
            "subcat": formular.unterkategorie,
            ...artikel
        })
        setzeAdminStatus("liste")
        setzeArtikel({})
        setzeFormular({
            hauptkategorie: "-1",
            unterkategorie: "-1"
          })
    }

    // Bearbeiten
    function bearbeite(artikel) {
        artikelKopie.current = { ...artikel }
        setzeAdminStatus("bearbeiten")
        setzeEditIndex("-1")
    }
    // Bearbeiten Ende
    function bearbeitenEnde() {
        setzeAdminStatus("liste")
    }
    // Bearbeiten-Feld aktivieren
    function aktiviereFeld(index) {
        setzeEditIndex(index)
    }
    // Bearbeiten-Feld deaktivieren
    function deaktiviereFeld() {
        setzeEditIndex("-1")
    }
    // Bearbeiten-Eingabe übernehmen
    function inputUebernehmen(key) {
        artikelKopie.current[key] = editInput.current.value
        setzeEditIndex("-1")
    }

    // Artikel speichern
    function speichernEdit() {
        props.updateArticle(artikelKopie.current)
        sort.current = "keine"
        setzeAdminStatus("liste")
    }

    // Löschen
    function loesche(artikel) {
        artikelKopie.current = { ...artikel }
        setzeAdminStatus("löschen")
    }

    function artikelLoeschen() {
        props.deleteArticle(artikelKopie.current)
        setzeAdminStatus("liste")
    }

    return !props.isLoggedIn ?
        /* Anmeldeformular */
        (<>
            <h2>Bitte anmelden!</h2>

            <form>
                <label>
                    Username:
                    <input type="text" name="username"
                        value={loginFormular.username}
                        onChange={formulareingabe} />
                </label>
                <label>
                    Passwort:
                    <input type="password" name="passwort"
                        value={loginFormular.passwort}
                        onChange={formulareingabe} />
                </label>
                <div>
                    <button type="button" onClick={logIn}>Anmelden</button>
                </div>
            </form>
        </>)
        :

        <>
            {   /* Hallo & Abmelden */
                admin.current &&
                <h2>Hallo, {admin.current.username}!</h2>
            }
            <button onClick={logOut}>Abmelden</button>
            {
                adminStatus === "liste" ?
                    /* Artikelliste */
                    (<>
                        <h3>Artikel</h3>
                        <button onClick={() => {setzeAdminStatus("neu")}}>Neuer Artikel</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>Titel</th>
                                    <th colSpan="2"><button onClick={sortiere}>Sortieren
                                        {(sort.current === "keine" || sort.current === "absteigend") && " (aufsteigend)"}
                                        {sort.current === "aufsteigend" && " (absteigend)"}</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    artikellisteKopie.map((ele) => {
                                        return (<tr key={ele.id}>
                                            <td>{ele.Titel}</td>
                                            <td onClick={() => { bearbeite(ele) }}>Bearbeiten</td>
                                            <td onClick={() => { loesche(ele) }}>Löschen</td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </table>
                    </>)
                    :

                    adminStatus === "bearbeiten" ?
                        /* Bearbeiten-Formular */
                        (<>
                            <h3>Artikel bearbeiten</h3>
                            <table>
                                <thead>
                                    <tr>
                                        {
                                            spalten[artikelKopie.current.maincat][artikelKopie.current.subcat].map((col) => {
                                                return <th key={col.field}>{col.name}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {
                                            spalten[artikelKopie.current.maincat][artikelKopie.current.subcat].map((col, index) => {
                                                return <td key={col.field}>
                                                    {
                                                        editIndex === "-1" &&
                                                        <button onClick={() => { aktiviereFeld(index) }}>{artikelKopie.current[col.field]}</button>
                                                    }
                                                    {
                                                        editIndex != "-1" && editIndex != index &&
                                                        <>{artikelKopie.current[col.field]}</>
                                                    }
                                                    {
                                                        editIndex === index &&
                                                        (<>
                                                            <input type="text" defaultValue={artikelKopie.current[col.field]} ref={editInput} />
                                                            <button onClick={deaktiviereFeld}>Verlassen</button>
                                                            <button onClick={() => { inputUebernehmen(col.field) }}>Bestätigen</button>
                                                        </>)
                                                    }
                                                </td>
                                            })
                                        }
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={bearbeitenEnde}>Abbrechen</button>
                            <button onClick={speichernEdit}>Bestätigen</button>
                        </>)
                        :

                        adminStatus === "neu" ?
                            /* Anlegen-Formular */
                            (<>
                                <h3>Neuer Artikel</h3>
                                {/* Kategorieauswahl */}
                                <form>
                                    <select value={formular.hauptkategorie}
                                        onChange={kategorieAendern} name="hauptkategorie">
                                        <option value="-1">Bitte Bereich wählen</option>
                                        {
                                            props.maincats.map((ele, index) => {
                                                return <option value={index} key={ele}>{ele}</option>
                                            })
                                        }
                                    </select>
                                    {
                                        // nur anzeigen, falls Hauptkategorie ausgewählt ist
                                        formular.hauptkategorie != "-1" &&
                                        (<select value={formular.unterkategorie}
                                            onChange={kategorieAendern} name="unterkategorie">
                                            <option value="-1">Bitte wählen</option>
                                            {
                                                props.subcats.map((ele) => {
                                                    return formular.hauptkategorie == ele.maincat ?
                                                        <option value={ele.subcat} key={ele.name}>{ele.name}</option>
                                                        : <></>
                                                })
                                            }
                                        </select>)
                                    }
                                </form>
                                {
                                    // neuer Artikel
                                    formular.hauptkategorie != "-1" &&
                                    formular.unterkategorie != "-1" &&
                                    <>
                                        <table>
                                            <thead>
                                                <tr>
                                                    {
                                                        spalten[formular.hauptkategorie][formular.unterkategorie].map((col) => {
                                                            return <th key={col.field}>{col.name}</th>
                                                        })
                                                    }
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {
                                                        spalten[formular.hauptkategorie][formular.unterkategorie].map((col, index) => {
                                                            return (<td key={col.field}>
                                                                <input type="text" name={col.name}
                                                                value={artikel[col.name]} onChange={eingabeNeu} />
                                                            </td>)
                                                        })
                                                    }
                                                </tr>
                                            </tbody>
                                        </table>
                                    </>
                                }
                                <button onClick={() => { 
                                    setzeAdminStatus("liste")
                                    setzeFormular({
                                        hauptkategorie: "-1",
                                        unterkategorie: "-1"
                                      })
                                }}>Abbrechen</button>
                                {
                                    
                                    formular.hauptkategorie != "-1" &&
                                    formular.unterkategorie != "-1" &&
                                    <button onClick={speichernNeu}>Bestätigen</button>
                                }
                            </>)
                            
                            : adminStatus === "löschen" ?
                            (<>
                                <h3>Artikel wirklich löschen?</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            {
                                                spalten[artikelKopie.current.maincat][artikelKopie.current.subcat].map((col) => {
                                                    return <th key={col.field}>{col.name}</th>
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            {
                                                spalten[artikelKopie.current.maincat][artikelKopie.current.subcat].map((col, index) => {
                                                    return <td key={col.field}>{artikelKopie.current[col.field]}</td>
                                                })
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                                <button onClick={() => { 
                                    setzeAdminStatus("liste")
                                }}>Abbrechen</button>
                                <button onClick={artikelLoeschen}>Bestätigen</button>
                            </>)

                            : <></>
            }
        </>


}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);