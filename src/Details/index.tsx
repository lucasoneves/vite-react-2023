/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useContext, lazy, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../fetchPet";
import Carousel from "../components/Carousel";
import ErrorBoundary from "../ErrorBoundary";
import AdoptedPetContext from "../AdoptedPetContext";
import styles from "./Details.module.scss";
import { Button } from "../components/Button";
import Loading from "../components/Loading";

import { PetAPIResponse } from "../APIResponsesType";

const Modal = lazy(() => import("../Modal"));

export function Details() {
  const { id } = useParams();

  if (!id) {
    throw new Error('ID is missing');wvc
  }
  const [showModal, setShowModal] = useState(false);
  const results = useQuery<PetAPIResponse>(["details", id], fetchPet);
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  if (results.isLoading) {
    return <Loading />;
  }

  const pet = results?.data?.pets[0];

  if (!pet) {
    throw new Error("no pets found")
  }

  return (
    <div className={styles["details"]}>
      <Carousel images={pet.images} />
      <div className={styles["info"]}>
        <h2>{pet.name}</h2>
        <h3>
          {pet.animal} - {pet.breed} - ${pet.city}, ${pet.city}
        </h3>
        <p>{pet.description}</p>
        <Button fullWidth click={() => setShowModal(true)}>
          Adopt $ {pet.name}
        </Button>
        {showModal ? (
          <Suspense fallback={<Loading />}>
            <Modal>
              <div className="modal-content">
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
                  <Button isFlat click={() => setShowModal(false)}>
                    No
                  </Button>
                </div>
              </div>
            </Modal>
          </Suspense>
        ) : null}
      </div>
    </div>
  );
}

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
export default DetailsErrorBoundary;
