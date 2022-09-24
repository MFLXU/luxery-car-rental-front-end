import { useState } from "react";
import checkMark from "../../../Assets/check-icon.png";
function CarRenting(props) {
  const [reserveStep, setReserveStep] = useState(1);
  function handleReserveStep() {
    setReserveStep(reserveStep + 1);
  }

  return (
    <>
      <div className="backdrop"></div>
      <div className="carrent-con container">
        <div className="car-infos">
          <div className="main-info">
            <p className="name">{props.name}</p>
            <p className="car-rate">
              ${props.price}/<span>Day</span>
            </p>
          </div>
          <p className="miles">
            100 miles per day included, $3 per additional mile, Security deposit
            required.
          </p>
          <div className="speeding-infos">
            <div className="speeding">
              <p>{props.speeding}</p>
              <p>(0/60)</p>
            </div>
            <div className="speeding">
              <p>{props.hp}</p>
              <p>{props.engin}</p>
            </div>
          </div>
          <div className="infos">
            <div className="info">
              <p>Max Speed :</p>
              <p>{props.maxspeed}</p>
            </div>
            <div className="info">
              <p>Consumption :</p>
              <p>{props.fulltank}</p>
            </div>
            <div className="info">
              <p>Gears :</p>
              <p>{props.gear}</p>
            </div>
            <div className="info">
              <p>Seating :</p>
              <p>{props.seating}</p>
            </div>
          </div>
          <div>
            <p className="dyc">DID YOU KNOW</p>
            <p>{props.funfact}</p>
          </div>
        </div>
        <div className="car-media">
          {reserveStep === 1 ? (
            <div>
              <img src={props.logo} alt="" />
            </div>
          ) : reserveStep === 2 ? (
            <div className="form">
              <p>Please Fill Your Informations :</p>
              <label>Name :</label>
              <input type="text" placeholder="Enter Your Name" />
              <label>E-Mail :</label>
              <input type="email" placeholder="Enter Your E-mail" />
              <label>Phone Number :</label>
              <input type="number" placeholder="Enter Your Phone Number" />
              <label>From :</label>
              <input type="date" placeholder="Start Date" />
              <label>To :</label>
              <input type="date" placeholder="End Date" />
            </div>
          ) : (
            <div className="confirm-renting">
              <img src={checkMark} alt="" />
              <h1>Application Sent</h1>
              <p>
                your application was sent, we wIll get in touch with you as soon
                as possible
              </p>
            </div>
          )}
          {reserveStep === 1 ? (
            <button onClick={handleReserveStep} className="btn-ghost w-full">
              Resereve Now
            </button>
          ) : reserveStep === 2 ? (
            <button onClick={handleReserveStep} className="btn-ghost w-full">
              Confirm
            </button>
          ) : null}
        </div>
      </div>
      ;
    </>
  );
}
export default CarRenting;
