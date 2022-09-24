import React from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import CarCCard from "./Components/CarCCard";
import Benefits from "./Components/Benefits";

function Chauffers() {
  return (
    <div>
      <Hero />
      <About />
      <CarCCard />
      <Benefits />
      <div className="container py-10">
        <p>
          The Chauffeur experience is more than just luxurious transportation.
          These vehicles have many qualities and features that can only be truly
          appreciated from the back seat. Sit back and relax while your driver
          gets you to your final destination on time. Our world class drivers
          and our premium luxury vehicles set the industry standards high.
          Consider a Chauffeur experience for your next special occasion,
          wedding, anniversary, or even just for a night on the town.
        </p>
      </div>
    </div>
  );
}

export default Chauffers;
