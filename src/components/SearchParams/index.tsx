import React, { useState, useContext, Suspense, lazy } from "react";
import { useQuery } from "@tanstack/react-query";
import useBreedList from "../../useBreedList";
import AdoptedPetContext from "../../AdoptedPetContext";
import fetchSearch from "../../fetchSearch";
import SearchBox from "../SearchBox";
import { Animal } from "../../APIResponsesType";
const Results = lazy(() => import('../Results'));
const ANIMALS : Animal[] = ["bird", "dog", "cat", "rabbit", "reptile"];

export default function SearchParams() {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "" as Animal,
    breed: "",
  });
  const [animal, setAnimal] = useState("" as Animal);
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const submitHandler = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const obj = {
      animal: formData.get("animal")?.toString() as Animal ?? ("" as Animal),
      breed: formData.get("breed")?.toString() ?? "",
      location: formData.get("location")?.toString() ?? "",
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
        setAnimal={(e: any) => setAnimal(e.target.value as Animal)}
      />
    </div>
  );
}
