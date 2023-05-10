import { Component } from "react";
import styles from "./Carousel.module.scss";

interface IProps {
  images: string[];
}
// Refatorar para Function Component
class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  setImage(photo: string) {
    return this.setState({ active: photo });
  }
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className={styles["carousel"]}>
        <img src={images[active]} alt="animal hero" />
        {/* // Corrigir para mostrar o carousel */}
        <div className={styles["carousel-smaller"]}>
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
              onClick={() => this.setImage(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
