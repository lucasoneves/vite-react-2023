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
    <form action="" onSubmit={submitHandler} className={styles["search-box"]}>
      {adoptedPet ? (
        <div className="pet image-container">
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>
      ) : null}
      <label htmlFor="location">
        <input
          className="main-input"
          type="text"
          placeholder="Search by location"
          name="location"
        />
      </label>
      <label htmlFor="animal">
        <select
          id="animal"
          class="main-input"
          value={animalValue}
          onChange={setAnimal}
        >
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
          class="main-input"
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
  );
}
