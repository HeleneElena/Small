import React from 'react';
import './App.css';
import Header from './Header/Header';
import Section from './Section/Section';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 


function App() {
  return (
 <BrowserRouter> 
      <div className="App">
        <Header />

      </div>
 </BrowserRouter> 
  );
}

export default App;
