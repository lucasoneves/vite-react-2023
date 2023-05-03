import React, { useState, useContext, Suspense, lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "../../useBreedList";
import AdoptedPetContext from "../../AdoptedPetContext";
import fetchSearch from "../../fetchSearch";
import SearchBox from "../SearchBox";
import Loading from "../Loading";
const Results = lazy(() => import('../Results'));
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];

export default function SearchParams({loadingResults}) {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
      location: formData.get("location") ?? "",
    };
    setRequestParams(obj);
  };

  return (
    <div className="search-params">
      <SearchBox
        adoptedPet={adoptedPet}
        submitHandler={submitHandler}
        breeds={breeds}
        animals={ANIMALS}
        animalValue={animal}
        setAnimal={(e) => setAnimal(e.target.value)}
      />
      <Suspense fallback={<Loading />}>
        <Results loading={loadingResults} pets={pets} />
      </Suspense>
    </div>
  );
}
