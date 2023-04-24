import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetchPet";
import Carousel from "../components/Carousel";
import ErrorBoundary from "../ErrorBoundary";
import Modal from "../Modal";
import AdoptedPetContext from "../AdoptedPetContext";
import styles from "./Details.module.scss";
import { Button } from "../components/Button";

export function Details() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="laader">Loadding... ⚙️</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className={styles["details"]}>
      <Carousel images={pet.images} />
      <div className="info">
        <h2>{pet.name}</h2>
        <h3>
          {pet.animal} - {pet.breed} - ${pet.city}, ${pet.city}
        </h3>
        <button className={styles["button"]} onClick={() => setShowModal(true)}>
          Adopt $ {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div className='modal-content'>
              <h2>Would you like to adopt {pet.name}?</h2>
              <div className="modal-content__actions">
                <Button
                  click={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </Button>
                <Button isFlat click={() => setShowModal(false)}>No</Button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
