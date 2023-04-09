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
    <form action="" onSubmit={submitHandler}>
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
        <select id="animal" value={animalValue} onChange={setAnimal}>
          {animals.map((animal) => (
            <option key={animal} value={animal}>
              {animal}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        <select id="breed" disabled={breeds.length === 0} name="breed">
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
