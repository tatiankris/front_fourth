import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Routing} from "./Routing";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing isAuth={false}/>
    </div>
  );
}

export default App;
