import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";
import { Animal } from "./APIResponsesType";

export default function useBreedList(animal: Animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  return [results?.data?.breeds ?? [], results.status];
}
