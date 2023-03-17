import "./App.css";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="container">
        <h1>adoção de pets</h1>
      </header>
      <div className="container">
        <SearchParams />
      </div>
    </div>
  );
}

export default App;
