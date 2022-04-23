import React, { Component } from 'react';

class Main extends Component {

    constructor(props) {
        super(props);
     
        this.state = {
            bereich: 1,
            vorname: "",
            nachname: "",
            email: "",
            anbieter: "-1",
            volumen: "-1",
            minuten: "-1",
            handycheck: "none",
            hersteller: "-1",
            modell: "-1"
        }

        this.eingabe = this.eingabe.bind(this)
        this.weiter = this.weiter.bind(this)
        this.zurueck = this.zurueck.bind(this)
    }

    tarife = {
        anbieter: [
          'T-Immobile',
          'Fodafon',
          'H2O',
          '0&0',
          'Crashed',
          'GMNiX'
        ],
        datenvolumen: [
          {
            name: 'ab 250 MB',
            preis: 0.99
          },
          {
            name: 'ab 500 MB',
            preis: 1.49
          },
          {
            name: 'ab 1 GB',
            preis: 1.99
          },
          {
            name: 'ab 2 GB',
            preis: 2.99
          },
          {
            name: 'ab 3 GB',
            preis: 5.99
          },
          {
            name: 'ab 5 GB',
            preis: 7.99
          },
          {
            name: 'ab 10 GB',
            preis: 12.99
          },
          {
            name: 'ab 15 GB',
            preis: 15.99
          },
          {
            name: 'unbegrenzt',
            preis: 19.99
          }
        ],
        minuten: [
          {
            name: 'ab 100 Minuten',
            preis: 0.99
          },
          {
            name: 'ab 200 Minuten',
            preis: 1.99
          },
          {
            name: 'ab 300 Minuten',
            preis: 3.99
          },
          {
            name: 'Telefon-Flat',
            preis: 7.99
          }
        ],
        handys: {
          hersteller: [
            'Apple', 'Samsung', 'Sony', 'Nokia'
          ],
          modelle: [
            {
              name: '0815/1',
              preis: 99.99
            },
            {
              name: '0815/2',
              preis: 299.99
            },
            {
              name: '0815/3',
              preis: 499.99
            },
            {
              name: '0815/4',
              preis: 699.99
            },
            {
              name: '0815/5',
              preis: 899.99
            }
          ]
        }
      }

    eingabe(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    weiter() {
        this.setState((currentState) => {
            return {
                bereich: currentState.bereich + 1
            }
        })
    }
    zurueck() {
        this.setState((currentState) => {
            return {
                bereich: currentState.bereich - 1
            }
        })
    }    
    
    render() {
        return (
            <form>
                {
                    this.state.bereich === 1 &&
                    <div>
                        <h2>Persönliche Daten</h2>
                        <label>Vorname</label>
                        <input required type="text" name="vorname"
                        value={this.state.vorname} onChange={this.eingabe} />
                        <label>Nachname</label>
                        <input required type="text" name="nachname"
                        value={this.state.nachname} onChange={this.eingabe} />
                        <label>E-Mail</label>
                        <input required type="email" name="email"
                        value={this.state.email} onChange={this.eingabe} />
                        <div>
                            <button type="button" onClick={this.weiter}
                            disabled={!this.state.vorname ||
                            !this.state.nachname ||
                            !this.state.email}>Weiter</button>
                        </div>
                    </div>
                }
                {
                    this.state.bereich === 2 &&
                <div>
                    <h2>Anbieter</h2>
                    <select required name="anbieter"
                    value={this.state.anbieter} onChange={this.eingabe}>
                        <option value="-1">Bitte Anbieter wählen</option>
                        {
                            this.tarife.anbieter.map((ele, index) => {
                                return <option value={index}>{ele}</option>
                            })
                        }
                    </select>
                    <div>
                        <button type="button" onClick={this.zurueck}>Zurück</button>&nbsp;
                        <button type="button" onClick={this.weiter}
                        disabled={this.state.anbieter === "-1"}>Weiter</button>
                    </div>
                </div> 
                }
                {
                    this.state.bereich === 3 &&
                <div>
                    <h2>Datenvolumen</h2>
                    <select required name="volumen"
                    value={this.state.volumen} onChange={this.eingabe}>
                        <option value="-1">Bitte Datenvolumen wählen</option>
                        {
                            this.tarife.datenvolumen.map((ele, index) => {
                                return <option value={index}>{ele.name}, {ele.preis} EUR</option>
                            })
                        }
                    </select>
                    <div>
                        <button type="button" onClick={this.zurueck}>Zurück</button>&nbsp;
                        <button type="button" onClick={this.weiter}
                        disabled={this.state.volumen === "-1"}>Weiter</button>
                    </div>
                </div> 
                }
                {
                    this.state.bereich === 4 &&
                <div>
                    <h2>Freiminuten</h2>
                    <select required name="minuten"
                    value={this.state.minuten} onChange={this.eingabe}>
                        <option value="-1">Bitte Minuten wählen</option>
                        {
                            this.tarife.minuten.map((ele, index) => {
                                return <option value={index}>{ele.name}, {ele.preis} EUR</option>
                            })
                        }
                    </select>
                    <div>
                        <button type="button" onClick={this.zurueck}>Zurück</button>&nbsp;
                        <button type="button" onClick={this.weiter}
                        disabled={this.state.minuten === "-1"}>Weiter</button>
                    </div>
                </div> 
                }
                {
                    this.state.bereich === 5 &&
                <div>
                    <h2>Handys</h2>
                    <select required name="handycheck"
                        value={this.state.handycheck} onChange={this.eingabe}>
                        <option value="none">Handy mitbestellen?</option>
                        <option value="y">Ja</option>
                        <option value="n">Nein</option>
                    </select>
                    {
                        this.state.handycheck === "y" &&
                        <>
                            <div>
                                <h3>Herstellerauswahl</h3>
                                <select required name="hersteller"
                                value={this.state.hersteller} onChange={this.eingabe}>
                                    <option value="-1">Bitte Hersteller wählen</option>
                                    {
                                        this.tarife.handys.hersteller.map((ele, index) => {
                                            return <option value={index}>{ele}</option>
                                        })
                                    }
                                </select>
                            </div> 
                            <div>
                                <h3>Modellauswahl</h3>
                                <select required name="modell"
                                value={this.state.modell} onChange={this.eingabe}>
                                    <option value="-1">Bitte Modell wählen</option>
                                    {
                                        this.tarife.handys.modelle.map((ele, index) => {
                                            return <option value={index}>{ele.name}, {ele.preis} EUR</option>
                                        })
                                    }
                            </select>
                            </div>
                        </>
                    } 
                    <div>
                        <button type="button" onClick={this.zurueck}>Zurück</button>&nbsp;
                        <button type="button" onClick={this.weiter}
                        disabled={this.state.handycheck === "none" ||
                        this.state.handycheck === "y" &&
                        (this.state.hersteller === "-1" ||
                        this.state.modell === "-1")}>Weiter</button>
                    </div>
                </div> 
                }
                {
                    this.state.bereich === 6 &&
                <div>
                    <h2>Zusammenfassung</h2>
                    <h3>Ihre Daten</h3>
                    <p>Vorname: {this.state.vorname}</p>
                    <p>Nachname: {this.state.nachname}</p>
                    <p>E-Mail: {this.state.email}</p>
                    <h3>Tarifdaten</h3>
                    <p>Anbieter: {this.tarife.anbieter[this.state.anbieter]}</p>
                    <p>Datenvolumen: {this.tarife.datenvolumen[this.state.volumen].name}, {this.tarife.datenvolumen[this.state.volumen].preis} EUR</p>
                    <p>Freiminuten: {this.tarife.minuten[this.state.minuten].name}, {this.tarife.minuten[this.state.minuten].preis} EUR</p>
                    {
                        this.state.handycheck === "y" &&
                        <div>
                            <h3>Handy</h3>
                            <p>Hersteller: {this.tarife.handys.hersteller[this.state.hersteller]}</p>
                            <p>Modell: {this.tarife.handys.modelle[this.state.modell].name}, {this.tarife.handys.modelle[this.state.modell].preis} EUR</p>
                        </div>
                    }
                    <button type="button" onClick={this.zurueck}>Zurück</button>&nbsp;
                    <button type="button" onClick={this.weiter}>Bestellen</button>
                </div>
                }
                {
                    this.state.bereich === 7 &&
                <div>
                    <h2>Danke für Ihre Bestellung!</h2>
                </div>
                }
            </form>
        );
    }
}

export default Main;