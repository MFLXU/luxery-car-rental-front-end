import CarCard from "./CarCard";
import { useState, useEffect } from "react";
import porsche from "../../../Assets/porsche.png";

import Data from "../Data.json";
import { data } from "autoprefixer";
function Cars() {
  useEffect(showAllHandle, []);
  {
    /* Show All */
  }
  const [showAll, setShowAll] = useState(true);
  function showAllHandle() {
    setShowPorsche(true);
    setShowBugatti(true);
    setShowLamborghini(true);
    setShowFerrari(true);
    setShowMclaren(true);
  }
  {
    /* Porsche */
  }
  const [showPorsche, setShowPorsche] = useState(false);
  function setShowPorscheHandle() {
    setShowPorsche(true);
    setShowBugatti(false);
    setShowLamborghini(false);
    setShowFerrari(false);
    setShowMclaren(false);
  }
  {
    /* Bugatti */
  }
  const [showBugatti, setShowBugatti] = useState(false);
  function setShowBugattiHandle() {
    setShowBugatti(true);
    setShowPorsche(false);
    setShowLamborghini(false);
    setShowFerrari(false);
    setShowMclaren(false);
  }
  {
    /* LAMBORGHINI */
  }
  const [showLamborghini, setShowLamborghini] = useState(false);
  function setShowLamborghiniHandle() {
    setShowLamborghini(true);
    setShowPorsche(false);
    setShowBugatti(false);
    setShowFerrari(false);
    setShowMclaren(false);
  }
  {
    /* Ferrari */
  }
  const [showFerrari, setShowFerrari] = useState(false);
  function setShowFerrariHandle() {
    setShowFerrari(true);
    setShowPorsche(false);
    setShowBugatti(false);
    setShowLamborghini(false);
    setShowMclaren(false);
  }
  {
    /* Mclaren */
  }
  const [showMclaren, setShowMclaren] = useState(false);
  function setShowMclarenHandle() {
    setShowMclaren(true);
    setShowPorsche(false);
    setShowBugatti(false);
    setShowLamborghini(false);
    setShowFerrari(false);
  }
  return (
    <section>
      <div className="container">
        <div className="cars-nav">
          <p
            onClick={showAllHandle}
            className={showAll ? "bg-amber-400 text-black" : ""}
          >
            all
          </p>
          <p
            onClick={setShowPorscheHandle}
            className={showPorsche ? "bg-amber-400 text-black" : ""}
          >
            Porsche
          </p>
          <p
            onClick={setShowBugattiHandle}
            className={showBugatti ? "bg-amber-400 text-black" : ""}
          >
            Buggati
          </p>
          <p
            onClick={setShowLamborghiniHandle}
            className={showLamborghini ? "bg-amber-400 text-black" : ""}
          >
            Lamborghini
          </p>
          <p
            onClick={setShowFerrariHandle}
            className={showFerrari ? "bg-amber-400 text-black" : ""}
          >
            Ferrari
          </p>
          <p
            onClick={setShowMclarenHandle}
            className={showMclaren ? "bg-amber-400 text-black" : ""}
          >
            Mclaren
          </p>
        </div>
        <div className="cars-con">
          {/* Porsche */}
          {showPorsche ? (
            <>
              {Data.map((car) => {
                if (car.brand === "porsche") {
                  return (
                    <CarCard
                      price={car.price}
                      name={car.name}
                      image={car.img}
                      logo={car.logo}
                      speeding={car.speeding}
                      hp={car.hp}
                      engin={car.engin}
                      maxspeed={car.maxspeed}
                      fulltank={car.fulltank}
                      gear={car.gear}
                      seating={car.seating}
                      funfact={car.funfact}
                    />
                  );
                }
              })}
            </>
          ) : null}
          {/* Bugatti */}
          {showBugatti ? (
            <>
              {Data.map((car) => {
                if (car.brand === "bugatti") {
                  return (
                    <CarCard
                      price={car.price}
                      name={car.name}
                      image={car.img}
                      logo={car.logo}
                      speeding={car.speeding}
                      hp={car.hp}
                      engin={car.engin}
                      maxspeed={car.maxspeed}
                      fulltank={car.fulltank}
                      gear={car.gear}
                      seating={car.seating}
                      funfact={car.funfact}
                    />
                  );
                }
              })}
            </>
          ) : null}
          {/* Lamborghini */}
          {showLamborghini ? (
            <>
              {Data.map((car) => {
                if (car.brand === "lamborghini") {
                  return (
                    <CarCard
                      price={car.price}
                      name={car.name}
                      image={car.img}
                      logo={car.logo}
                      speeding={car.speeding}
                      hp={car.hp}
                      engin={car.engin}
                      maxspeed={car.maxspeed}
                      fulltank={car.fulltank}
                      gear={car.gear}
                      seating={car.seating}
                      funfact={car.funfact}
                    />
                  );
                }
              })}
            </>
          ) : null}
          {/* Ferrari */}
          {showFerrari ? (
            <>
              {Data.map((car) => {
                if (car.brand === "ferrari") {
                  return (
                    <CarCard
                      price={car.price}
                      name={car.name}
                      image={car.img}
                      logo={car.logo}
                      speeding={car.speeding}
                      hp={car.hp}
                      engin={car.engin}
                      maxspeed={car.maxspeed}
                      fulltank={car.fulltank}
                      gear={car.gear}
                      seating={car.seating}
                      funfact={car.funfact}
                    />
                  );
                }
              })}
            </>
          ) : null}
          {/* Mclaren */}
          {showMclaren ? (
            <>
              {Data.map((car) => {
                if (car.brand === "mclaren") {
                  return (
                    <CarCard
                      price={car.price}
                      name={car.name}
                      image={car.img}
                      logo={car.logo}
                      speeding={car.speeding}
                      hp={car.hp}
                      engin={car.engin}
                      maxspeed={car.maxspeed}
                      fulltank={car.fulltank}
                      gear={car.gear}
                      seating={car.seating}
                      funfact={car.funfact}
                    />
                  );
                }
              })}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default Cars;
