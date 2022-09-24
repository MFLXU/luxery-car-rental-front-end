import Hero from "./Components/Hero";
import About from "./Components/About";
import Benefits from "./Components/Benefits";
import { useState } from "react";
import Application from "./Components/Application";
import close from "../../Assets/close-icon.png";
function Membership() {
  const [application, setApplication] = useState(false);
  function showApplication() {
    setApplication(true);
  }
  return (
    <div>
      <Hero />
      <About />
      <Benefits />

      {application ? (
        <>
          <Application />{" "}
          <div className="close-icon">
            <img onClick={() => setApplication(false)} src={close} alt="" />
          </div>
        </>
      ) : null}
      <div className="container">
        <button onClick={showApplication} className="btn-ghost w-full mt-8">
          Apply For Membership
        </button>
      </div>
    </div>
  );
}
export default Membership;
