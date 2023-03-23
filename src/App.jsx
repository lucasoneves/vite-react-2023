import "./App.css";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="container">
          <Link to="/">adoção de pets</Link>
        </header>
        <div className="App">
          {/* <div className="container">
            <SearchParams />
          </div> */}
          <div className="container">
            <Routes>
              <Route path="/details/:id" element={<Details />}></Route>
              <Route path="/" element={<SearchParams />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
