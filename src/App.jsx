import "./App.css";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
