import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import About from './Componets/About';
import Home from './Componets/Home';
import Portfolio from './Componets/Portfolio';





function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Portfolio" component={Portfolio}></Route>
        <Route exact path="/about" component={About}></Route>


      </Switch>
    </div>
  )
}





export default App