import Pet from "../Pet";
import styles from "./Results.module.css";

const Results = ({ pets }) => {
  return (
    <div className={styles.results}>
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Pet
              name={pet.name}
              breed={pet.breed}
              animal={pet.animal}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
              id={pet.id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
