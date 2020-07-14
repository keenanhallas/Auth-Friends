import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
