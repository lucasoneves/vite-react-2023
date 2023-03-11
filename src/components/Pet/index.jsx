import styles from './Pet.module.css'

export default function Pet({name, animal, breed}) {
  return (
    <div className={styles.pet}>
      <h2>{name}</h2>
      <h3>{animal}</h3>
      <h3>{breed}</h3>
    </div>
  )
}