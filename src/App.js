import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Home from './Componets/Home';
import Contact from './Componets/Contact';
import Portfolio from './Componets/Portfolio';
import { FaCheck } from 'react-icons/fa';
import { IoIosAddCircle } from 'react-icons/io';
import State from './Componets/State';
import Change from './Componets/Change';
import Click from './Componets/Click';
import Card from './Componets/Card';



function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/Portfolio" component={Portfolio}></Route>
      </Switch>
    </div>
  )
}





export default App