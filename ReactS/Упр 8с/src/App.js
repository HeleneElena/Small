import './App.css';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import mapStateToProps from './redux/mapStateToProps';
import mapDispatchToProps from './redux/mapDispatchToProps';
import { Routes, Route, NavLink } from 'react-router-dom'
import Select from './components/Select'
import Table from './components/Table'
import Product from './components/Product';
import Cart from './components/Cart'
import Admin from './components/Admin';

function App(props) {

  // nur nach der Initialisierung
  useEffect(() => {
    // Daten laden
    props.setMainCats()
    props.setSubCats()
    props.setArticles()
    props.setUsers()
    // Warenkorb
    let warenkorbString = localStorage.getItem("warenkorb")
    if (warenkorbString != null) {
      const warenkorbArray = JSON.parse(warenkorbString)
      props.setCart(warenkorbArray)
    } else  {
      warenkorbString = JSON.stringify(props.warenkorb)
      localStorage.setItem("warenkorb", warenkorbString)
    }
    // Formulardaten  
    let formularString = localStorage.getItem("formular")
    if (formularString != null) {
      const formularObjekt = JSON.parse(formularString)
      props.setCategories(formularObjekt)
    } else  {
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
      <NavLink to="/admin"><div>Admin</div></NavLink>
    </nav>
    <main>
      <Routes>
        <Route path="/" element={(<>
          <Select /><Table />
        </>)} />
        <Route path="/product" element={(<Product />)} />
        <Route path="/cart" element={(<Cart />)} />
        <Route path="/admin" element={(<Admin />)} />
      </Routes>
    </main>
  </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
