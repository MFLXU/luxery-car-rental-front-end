import heroImg from "../../../Assets/hero-img.jpg";
function Hero() {
  return (
    <div id="hero-chauffers-section">
      <div className="container">
        <div className="hero-con">
          <h1>CHAUFFEUR SERVICES</h1>
          <p>
            Looking to book a luxurious chauffeur ride services for an enjoyable
            travel experience on all-inclusive rates? mph club exotic car rental
            is ready to turn out your boring journeys into stress-free, smooth,
            and stylish travel experiences.
          </p>
          <a className="w-full md:w-fit" href="/">
            <button className="btn-ghost">Browse Inventory</button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
