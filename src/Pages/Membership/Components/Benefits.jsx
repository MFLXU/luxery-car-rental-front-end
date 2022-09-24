import checkIcon from "../../../Assets/check-icon.png";
function Benefits() {
  return (
    <section>
      <div className="container">
        <div className="benefits-con">
          <p className="title">Membership Benefits</p>
          <p className="price">$ 65,000</p>
          <div className="benifits">
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>100 Rental Days, That Never Expire</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>Transferable Rental Days</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>No Credit Check Required</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>5,000 Miles, That Never Expire</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>Low Member to Car Ratio</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>24/7 Roadside Assistance.</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>Complimentary Vehicle Replacement.</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>Complimentary Vehicle Towing.</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>Complimentary Vehicle Pick Up and Delivery.</p>
            </div>
            <div className="benifit">
              <img src={checkIcon} alt="" />
              <p>Quick and Easy Access and Checkout!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Benefits;
