import { AdoptedPet } from "../AdoptedPet";
import styles from "./SearchBox.module.css";

export default function SearchBox({
  adoptedPet,
  submitHandler,
  breeds,
  animals,
  animalValue,
  setAnimal,
}) {
  return (
    <>
      <form action="" onSubmit={submitHandler} className={styles["search-box"]}>
        <label htmlFor="animal">
          <select
            id="animal"
            className="main-input"
            value={animalValue}
            onChange={setAnimal}
          >
            <option value="">Select one option</option>
            {animals.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <select
            id="breed"
            className="main-input"
            disabled={breeds.length === 0}
            name="breed"
          >
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button className="main-button">Submit</button>
      </form>
      {adoptedPet ? (
        // <div className="pet image-container">
        //   <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        // </div>
        <AdoptedPet name={adoptedPet.name} thumb={adoptedPet.images[0]} />
      ) : null}
    </>
  );
}
