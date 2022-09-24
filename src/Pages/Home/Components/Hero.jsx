import heroImg from "../../../Assets/hero-img.jpg";
function Hero() {
  return (
    <div id="hero-section">
      <div className="container">
        <div className="hero-con">
          <h1>WELCOME TO LUXCLUB</h1>
          <p>
            For those who love exotic car rental in Miami and luxury cars, for
            those who love to vacation in style, and for those who won’t settle
            for anything less than the best, lux club exotic & luxury car rental
            is your access to the nation’s largest collection of luxury and
            exotic vehicles
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
