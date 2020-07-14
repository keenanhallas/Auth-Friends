import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import { FriendsList } from "./components/FriendsList";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/friendslist" component={FriendsList}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
