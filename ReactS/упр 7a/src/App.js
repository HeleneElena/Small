import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import mapStateToProps from './redux/mapStateToProps'
import mapDispatchToProps from './redux/mapDispatchToProps'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import Select from './components/Select'
import Table from './components/Table'

function App(props) {
  
  // nur nach der Initialisierung
  useEffect(() => {
    // Warenkorb
    let warenkorbString = localStorage.getItem("warenkorb")
    if (warenkorbString != null) {
      const warenkorbArray = JSON.parse(warenkorbString)
      props.setCart(warenkorbArray)
    } else {
      warenkorbString = JSON.stringify(props.warenkorb)
      localStorage.setItem("warenkorb", warenkorbString)
    }
    // Formulardaten 
    let formularString = localStorage.getItem("formular")
    if (formularString != null) {
      const formularObjekt = JSON.parse(formularString)
      props.setCategory(formularObjekt)
    } else {
      formularString = JSON.stringify(props.formular)
      localStorage.setItem("formular", formularString)
    }
  }, [])

  // nach Update von warenkorb
  useEffect(() => {
    const warenkorbString = JSON.stringify(props.warenkorb)
    localStorage.setItem("warenkorb", warenkorbString)
  }, [props.warenkorb])
  // nach Update von formular
  useEffect(() => {
    const formularString = JSON.stringify(props.formular)
    localStorage.setItem("formular", formularString)
  }, [props.formular])


  return (
    <div id="container">
      <header>
        <h1>Bücher und Mehr</h1>
      </header>
      <nav className="clearfix">
        <NavLink to="/"><div>Shop</div></NavLink>
        <NavLink to="/cart"><div>Warenkorb ({props.warenkorb.length})</div></NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<><Select /><Table /></>} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
