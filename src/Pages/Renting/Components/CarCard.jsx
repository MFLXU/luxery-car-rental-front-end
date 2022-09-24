import Porsche from "../../../Assets/porsche.png";
import CarRenting from "./CarRenting";
import { useState } from "react";
import Application from "../../Membership/Components/Application";
import close from "../../../Assets/close-icon.png";
function CarCard(props) {
  const [rentingCard, setRentingCard] = useState(false);
  function showRentingCard(props) {
    setRentingCard(true);
  }

  return (
    <>
      {rentingCard ? (
        <>
          <Application />{" "}
          <div className="close-icon">
            <img onClick={() => setRentingCard(false)} src={close} alt="" />
          </div>
        </>
      ) : null}
      <article className="car-card">
        <div className="car-info">
          <div>
            <p className="car-rate">
              ${props.price}/<span>Day</span>
            </p>
            <p className="car-name">{props.name}</p>
          </div>

          <button onClick={showRentingCard} className="btn-ghost">
            Rent
          </button>
        </div>
        <img src={props.image} alt="" />
      </article>
      {rentingCard ? (
        <CarRenting
          name={props.name}
          price={props.price}
          speeding={props.speeding}
          hp={props.hp}
          engin={props.engin}
          maxspeed={props.maxspeed}
          fulltank={props.fulltank}
          gear={props.gear}
          seating={props.seating}
          funfact={props.funfact}
          logo={props.logo}
        />
      ) : null}
    </>
  );
}
export default CarCard;
