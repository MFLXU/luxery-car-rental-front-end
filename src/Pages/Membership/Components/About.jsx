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
          <h1>MPH CLUB MEMBERSHIP LEASE PROGRAM WELCOME TO THE CLUB</h1>
          <p>
            Our membership program gives you access to one of the largest exotic
            & luxury car collections in the nation for a discounted rate. For a
            one time cost of $65,000 you will have access to a vast selection of
            unique and exotic vehicles. Why waste your money buying one exotic
            vehicle just to lose half of its value in depreciation alone? Our
            program allows you to enjoy a multitude of vehicles without worrying
            about a depreciating asset. We are often the first company in the
            nation to have certain vehicles and our members benefit from our
            industry connections. For an automotive enthusiast, driving a
            collection of exotic and luxury vehicles sounds like a dream come
            true. Becoming an mph club member is more than just joining a brand.
            This is your opportunity to drive a different exotic vehicle every
            day.
          </p>
          <p className="showmore" onClick={showMoreHandle}>
            {showMore ? "Show Less..." : "Show More..."}
          </p>
          {showMore ? (
            <>
              <h3>LUXURY AND EXOTIC CAR RENTAL MEMBERSHIP PROGRAM</h3>
              <p>
                Access to the best exotic and luxurious cars at a discounted
                rate, enjoy the best ride of the city in a brand-new vehicle
                like the Lamborghini Aventador s Roadster rental. mph club,
                offers the best exotic and exclusive car rentals at discounted
                rates with our membership program.
              </p>
              <p>
                mph club members are some of the fortunate few to sit behind the
                wheel with a simple reservation of the most famous supercars in
                the world. Besides car hires, mph club members have the choice
                of using certain additional services.
              </p>
              <p>
                We are also the first car rental business in the country with
                the largest exotic and luxury vehicle collection for our
                members. Our offer and service are available for everyone,
                whether you are an ordinary person or a celebrity. The dream of
                riding in new and robust cars is never going to end.
              </p>
              <p>
                mph club provides luxury car enthusiasts with a prestigious
                opportunity to ride their favorite vehicles in different cities
                of the United States, mainly in Miami and Orlando. Miami it is
                exceptionally well-known and famous as a holiday destination.
                You could list its cars with straightforward procedures. So here
                we are, fulfilling your goals by offering our membership.
              </p>
              <h3>GET ACCESS TO OUR ENTIRE FLEET WITH OUR MEMBERSHIP CLUB</h3>
              <p>
                Our short term lease scheme offers you a way to one of the
                largest exotic car rental collections in the nation at a
                discounted rate. All you have to do is submit a one-time fee of
                $65,000; then, you will have access to a vast range of exclusive
                and exotic vehicles. You can enjoy many vehicles without
                worrying about a downgrading asset. We offer various luxury car
                rental options for customers, such as Lamborghini rental,
                McLaren rental, Ferrari rental, Rolls Royce rental, and Bentley
                rental.
              </p>
              <p>
                A car enthusiast feels like he is in fantasy as he drives a
                range of top exotic cars. It is more than just joining a brand
                to become an mph club member. It is your chance to drive a
                exotic vehicle every day.
              </p>
              <p>
                This program offers many benefits that you will never find
                anywhere like, 100 rental days to use that never ends. The
                membership provides 5,000 miles, and any extra miles is only $5
                per mile. You can also transfer rental days with unparalleled
                services.
              </p>
              <p>
                We will not require a credit check and we also provide a low
                member to car ratio. We will also provide you with 24/7 roadside
                assistance and complimentary vehicle replacement or towing.
                Critical roadside helps to cover accidents if your vehicle
                breaks down or you are stranded; it happens in exceptional
                situations, but we will provide you with as much support as
                possible.
              </p>
              <h3>
                MAKE THE MOST OF THE MPH CLUB EXOTIC CAR RENTAL MEMBERSHIP
                PROGRAM
              </h3>
              <p>
                There is no other way to profit from driving a set of luxury
                cars as a car lover with little or no effort.
              </p>
              <p>
                When you have completed the registration process, you will have
                access to the entire fleet of luxurious and exotic vehicles.
                Driving cars from our fleet will give you a lifetime experience,
                is our Goal. So Why buy any luxurious exotic vehicle when you
                can get a membership and have access to the largest fleet of
                luxury and exotic vehicles in the nation.
              </p>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
export default About;
