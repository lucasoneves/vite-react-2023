import "./App.css";
import Pet from "./components/Pet";
import { useState } from "react";
import SearchParams from "./components/SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const adoptedPet = useState(null);
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="container">
              <Link to="/">adoção de pets</Link>
            </header>
            <div className="App">
              <div className="container">
                <Routes>
                  <Route path="/details/:id" element={<Details />}></Route>
                  <Route path="/" element={<SearchParams />}></Route>
                </Routes>
              </div>
            </div>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
