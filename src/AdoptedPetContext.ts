import { createContext } from "react";
import { Pet } from "./APIResponsesType";

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
  {
    id: 1234,
    name: "Adopted",
    animal: "bird",
    description: "lorem ipsum dolor sit amet",
    breed: "beagle",
    images: [],
    city: "San Francisco",
    state: "CA",
  }, () => {}
]);

export default AdoptedPetContext;
