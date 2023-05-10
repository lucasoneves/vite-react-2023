import styles from "./Pet.module.css";
import { Link } from "react-router-dom";

interface IProps {
  name: string;
  animal: string;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet = (props: IProps) => {
  const { name, animal, breed, images, location, id } = props;
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className={styles["pet-card"]}>
      <div
        className={styles["image-container"]}
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
      <div className={styles.info}>
        <h2 className={styles["pet-name"]}>{name}</h2>
        <h3 className={styles["pet-description"]}>
          {animal} - {breed} - {location}
        </h3>
      </div>
    </Link>
  );
}

export default Pet;