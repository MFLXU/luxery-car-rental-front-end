import { useState } from "react";
function About2() {
  const [showMore, setShowMore] = useState(false);
  function showMoreHandle() {
    setShowMore(!showMore);
  }
  return (
    <section>
      <div className="container">
        <div className="about-con">
          <h1>EXOTIC & LUXURY CAR RENTALS</h1>
          <p>
            Our multiple locations make it simple and easy to pick up and drop
            off vehicles anywhere. For example, we are located on property at
            the Fontainebleau Hotel in Miami beach and guests who rent with us
            can leave their rentals at the hotel to save time. For those who are
            not close by to one of our multiple locations we also offer vehicle
            delivery. Pricing for delivery will depend on the destination, feel
            free to reach out to us for a pricing estimate.
          </p>
          <h3>LUXURY CAR RENTAL IN MIAMI</h3>
          <p>
            The way Tech users keep themselves updated with the latest model of
            tech, we keep our fleet updated. The dynamics of economics have
            shown a visible change in the past few years and are noticeable. The
            business of tourism has reached new heights. It is the same for
            customers’ preferences when choosing an exotic car rental Miami and
            luxury car rental in Miami. We do strive to be at least one step
            ahead, by following the new models and trends. We continuously
            update our fleet to make your vacations, business trips, and
            gatherings memorable. The exotic car rental Miami and luxury car
            rental industry is based on two basic criteria: selection and
            service. Our customer care and services have evolved and improved
            over the years of operation. They can find answers to many
            unanswered queries and questions without delays. Since our customer
            service does not need to go through the complicated policies of a
            global chain, they are simple and effective to answer. Our attention
            to detail and passion for customer service coupled with the nation’s
            largest exotic car rental Miami and luxury car rental fleet is why
            we are so successful. We are situated in the major spots across
            Florida. Renting an exotic luxury car and sports car hasn’t been
            that easy ever. These offices are located in various locations in
            Florida for your convenience. Our office will deliver your vehicle
            to your hotel or anywhere you desire. We welcome you to enjoy the
            breezy evenings and calm atmospheres of Miami and the rest of
            Florida. We are currently operating in all Miami with locations at
            the SLS hotel in south beach, Fontainebleau hotel in Miami Beach,
            Opa Locka Executive Airport, Prestige Imports, Orlando, and many
            more locations. Visit our Contact Us page for more locations.
          </p>
          <h3>EXOTIC CAR RENTAL MIAMI</h3>
          <p>
            Florida is a perfect place for anyone to spend holidays with their
            loved ones. Not everyone has relatives with Condos and sports cars
            across the beach in Miami or Florida in general. And if you’re
            living your life to the fullest, you might want to check out our
            luxury supercar rental services in order to rent from the nation’s
            finest and largest luxury and exotic car rental Miami, mph club. Our
            wide range of luxury cars and sports cars available for rent
            including Lamborghini rental, Ferrari rental, Bentley rental, Rolls
            Royce rental, McLaren rental always welcomes you to take them out
            for a drive. Luxurious rides to add spice to your vacations,
            holidays and gatherings are always available across the major spots
            in Florida. Check out the section featuring our luxurious and exotic
            car rental Miami.
          </p>
          <p className="showmore" onClick={showMoreHandle}>
            {showMore ? "Show Less..." : "Show More..."}
          </p>
          {showMore ? (
            <>
              <h3>WHY SHOULD YOU RENT A CAR FROM MPH CLUB?</h3>
              <p>
                Let’s be honest here. There are plenty of super car rental
                sites. Most of them have huge promotional budgets. However, few
                of them rely 100% on quality car rental. And none of them were
                initiated by enthusiastic travelers who know not only how to
                find the best prices but all the secrets of renting premium
                cars.
              </p>
              <p>
                Our mission is clear and focused. We exist to help you get the
                best exotic car rental rates possible and then share with you
                our know-how to make the best out of your business trips,
                vacations, and gatherings.
              </p>
              <p>
                Other services quote extraordinarily expensive rates, which are
                not convenient for most people. That’s not how we work. We
                provide you with flexible rates on luxury supercar rentals.
                Savings are sometimes modest. They’re big a lot of times.
                Sometimes they are huge. We do what it takes you hours to do in
                minutes.
              </p>
              <p>
                You will be delighted to meet experienced staff in all of our
                offices to give you an experience that you know you deserve.
              </p>
              <p>
                In many respects, the cars we own are so luxurious, exotic, and
                provide you with the best experience.
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
export default About2;
