import CarC from "./CarC";
import Range from "../../../Assets/Cars/rolls-royce-phantom-rental-cover-mph-club-1920x1080.jpeg";
function CarCCard() {
  return (
    <section>
      <div className="container">
        <div className="carccard-con">
          <CarC price="1999" name="land rover" image={Range} />
          <CarC price="1999" name="land rover" image={Range} />
          <CarC price="1999" name="land rover" image={Range} />
          <CarC price="1999" name="land rover" image={Range} />
        </div>
      </div>
    </section>
  );
}
export default CarCCard;
