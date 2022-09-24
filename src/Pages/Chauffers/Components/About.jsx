import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);
  function showMoreHandle() {
    setShowMore(!showMore);
  }
  return (
    <section>
      <div className="container">
        <div className="about-con">
          <h2>CHAUFFEUR SERVICES MIAMI</h2>
          <p>
            Looking to book a luxurious chauffeur ride services for an enjoyable
            travel experience on all-inclusive rates? mph club exotic car rental
            is ready to turn out your boring journeys into stress-free, smooth,
            and stylish travel experiences.
          </p>
          <p>
            Experience the ultimate white glove transportation service. Be
            driven to your final destination by professional drivers in some of
            the most luxurious and iconic vehicles ever made.
          </p>
          <p>
            Every day we go above and beyond so that you can relish for the most
            lavishing and reliable luxury car rental by getting Chauffeurs in
            the spotlight. Traveling has gotten far more simple with the
            assistance of a professional Chauffeur. They have been giving
            amazing extravagance heading out administrations to both business or
            joy trips. The fundamental objective of a professional driver is the
            responsibility that we do with our clients and travelers and
            guarantee them about the dynamic and pleasant excursion.
          </p>
          <h3>LUXURY CHAUFFEUR SERVICES IN MIAMI</h3>
          <p>
            The vision of our company is to provide remarkable, excellent,
            comfortable, reliable, and convenient chauffeur services in Miami
            and transfer to our customers and travelers. it is a smarter way to
            book a ride and travel with us.
          </p>
          <p>
            Luxury Chauffeur services Miami are becoming popular nowadays as
            it’s running in several cities and countries of the world such as
            Dubai, Istanbul, Los Angeles, London, New York, and Paris, etc. We
            offer a luxury chauffeur service for any occasion, like weddings,
            for business, or for any event of any matter. Our chauffeur services
            offer professional and well-trained drivers. The chauffeur services
            in Miami are very fast and timeliness and these characteristics make
            this company more trustworthy, consistent, and dependable for the
            customers. This character, status, and reputation of the company are
            earned by the constant working and great dealing with customers. Our
            company feels more proud that we are providing one of the best
            transport services to travelers and tourists.
          </p>
          <p className="showmore" onClick={showMoreHandle}>
            {showMore ? "Show Less..." : "Show More..."}
          </p>
          {showMore ? (
            <>
              <h3>PROFESSIONAL DRIVERS</h3>
              <p>
                The behavior of our staff members is extremely responsive
                towards the preference of our clients. Our chauffeurs always
                respond to you whenever you want to get any services. We are
                dedicated to provide high-class service, comfort, politeness,
                and trustworthiness. We are devoting the supreme and best
                transportation services to our customers. We also ensure that
                every ride is comfortable, relaxed, and give satisfaction to the
                travelers.
              </p>
              <h3>LUXURY PRIVATE TRANSPORTATION</h3>
              <p>
                Professional Chauffeur services are very easy to avail of. You
                can request the chauffeur services by online booking on our
                website or by just one phone call. By just one-click, you not
                only book the car but also can see many options of chauffeured
                vehicles avialable and its related prices. Our price for one
                ride includes the following service charges such as local
                drivers, great assistance, remarkable vehicle services, etc.. We
                also provide the services with hourly rates. Our drivers show
                gratitude to the customers so that they trust our company and
                enhance its reputation. Our rental cars are very luxurious. We
                sanitized our rental cars daily for the safety of our customers.
                The rates of luxury car rental with chauffeur services are
                different for different car models. We provide the chauffeur
                service for different top luxurious car models and SUVs. Our
                drivers are professionals who will take you to your destination
                in a safe manner. The luxury vehicles available for chauffeur
                service are Rolls Royce Phantom rental, Rolls Royce Ghost
                rental, Rolls Royce Cullinan rental, Range Rover rental,
                Mercedes Benz Maybach rental, and Cadillac Escalade ESV rental.
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
export default About;
