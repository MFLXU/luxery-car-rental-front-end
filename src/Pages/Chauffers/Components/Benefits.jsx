import stars from "../../../Assets/5stars.png";
import twentifo from "../../../Assets/247.png";
import celi from "../../../Assets/celibrity.png";
import clean from "../../../Assets/clean.png";
import pro from "../../../Assets/pro-drivers.png";
import easyr from "../../../Assets/easy-reservation.png";
import cuserv from "../../../Assets/customer-service.png";
import newv from "../../../Assets/newest-vehicules.png";
import chauffers from "../../../Assets/chauffeur.png";
import vs from "../../../Assets/service.png";
function Benefits() {
  return (
    <section>
      <div className="container">
        <div className="services-con">
          <div className="service">
            <img src={twentifo} alt="" />
            <p>24/7 Customer service</p>
          </div>
          <div className="service">
            <img src={clean} alt="" />
            <p>Clean Vehicles</p>
          </div>
          <div className="service">
            <img src={easyr} alt="" />
            <p>Easy Reservations</p>
          </div>
          <div className="service">
            <img src={cuserv} alt="" />
            <p>World Class Customer Service</p>
          </div>
          <div className="service">
            <img src={newv} alt="" />
            <p>The Newest Vehicle Models</p>
          </div>
          <div className="service">
            <img src={pro} alt="" />
            <p>Convenience Transportation</p>
          </div>
          <div className="service">
            <img src={chauffers} alt="" />
            <p>Professional Drivers</p>
          </div>
          <div className="service">
            <img src={celi} alt="" />
            <p>Celebrity Treatment</p>
          </div>
          <div className="service">
            <img src={vs} alt="" />
            <p>Vehicle Service</p>
          </div>
          <div className="service">
            <img src={stars} alt="" />
            <p>5 Star Rated Services</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Benefits;
