import styles from "./Pet.module.css";

export default function Pet({ name, animal, breed, images, location, id }) {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <a href={`/details/${id}`} className={styles.pet}>
      <div className="image-container">
        <img src={hero} alt={name} className={styles.thumb} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>
          {animal} - {breed} - {location}
        </h3>
      </div>
    </a>
  );
}
