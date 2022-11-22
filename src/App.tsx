import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import {Routing} from "./Routing";
import ErrorsBar from "./components/errorsBar/ErrorsBar";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routing />
        <ErrorsBar/>
    </div>
  );
}

export default App;
