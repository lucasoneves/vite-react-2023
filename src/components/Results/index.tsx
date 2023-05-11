import { lazy, Suspense } from "react";
import Pet from "../Pet";
import styles from "./Results.module.css";
import Loading from "../Loading";
import { Pet as PetType} from '../../APIResponsesType';

const Results = ({ pets }: {pets: PetType[]}) => {
  return (
    <div className={styles.results}>
      {!pets.length ? (
        <h2>No Pets Found</h2>
      ) : (
        pets.map((pet) => {
          return (
            <Suspense fallback={<Loading />}>
              <Pet
              name={pet.name}
              breed={pet.breed}
              animal={pet.animal}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              key={pet.id}
              id={pet.id}
            />
            </Suspense>
          );
        })
      )}
    </div>
  );
};

export default Results;
