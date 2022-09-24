function CarC(props) {
  return (
    <article className="car-card relative">
      <p className="absolute text-4xl text-center font-bold top-[50%] left-[50%] translate-x-[-50%]">
        Not Available For Rent
      </p>
      <div className="car-info opacity-20">
        <div>
          <p className="car-rate">
            ${props.price}/<span>Day</span>
          </p>
          <p className="car-name">{props.name}</p>
        </div>
        <a href="/">
          <button className="btn-ghost hover:cursor-not-allowed">
            Not Available
          </button>
        </a>
      </div>
      <img className="opacity-20" src={props.image} alt="" />
    </article>
  );
}
export default CarC;
