import React from "react";

import "./App.css"
import { HashRouter, Route } from 'react-router-dom';

import Home from "./routes/Home";
import About from "./routes/About"; //About.js가 필요.
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

function App(){
  return (
    <HashRouter>
      
        <Navigation />
        <Route path="/movie-detail" component={Detail} />
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
      
    </HashRouter>
  );
}

export default App;
