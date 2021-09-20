import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Cadet1 from "./HOC/User1.js";
import Cadet2 from "./HOC/User2";


function App() {
  return (
    <div className="App">
      <Cadet1  campNo='120' />
      <Cadet2 campNo='140' />
    </div>
  );
}

export default App;
