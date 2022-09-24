import inventory from "../../../Assets/inventory.png";
import chauffeur from "../../../Assets/chauffeur.png";
import membership from "../../../Assets/membership.png";
import service from "../../../Assets/service.png";
import reservation from "../../../Assets/reservation.png";

function Services() {
  return (
    <section>
      <div className="container">
        <div className="services-con">
          <div className="service">
            <img src={inventory} alt="" />
            <p>BROWSE INVENTORY</p>
          </div>
          <div className="service">
            <img src={reservation} alt="" />
            <p>MAKE A RESERVATION</p>
          </div>
          <div className="service">
            <img src={membership} alt="" />
            <p>MEMBERSHIP</p>
          </div>
          <div className="service">
            <img src={chauffeur} alt="" />
            <p>CHAUFFEUR SERVICES</p>
          </div>
          <div className="service">
            <img src={service} alt="" />
            <p>VIHECULE SERVICES</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
