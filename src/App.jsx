import "./App.css";
import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import AdoptedPetContext from "./AdoptedPetContext";
import Loading from "./components/Loading";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./components/SearchParams"));

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
          <Suspense fallback={<Loading />}>
            <AdoptedPetContext.Provider value={adoptedPet}>
              <Header />
              <div className="App">
                <div className="container pd-bt">
                  <Routes>
                    <Route path="/details/:id" element={<Details />}></Route>
                    <Route path="/" element={<SearchParams />}></Route>
                  </Routes>
                </div>
              </div>
            </AdoptedPetContext.Provider>
          </Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
