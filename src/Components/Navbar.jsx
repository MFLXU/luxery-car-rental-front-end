import { Link } from "react-router-dom";
import { useState } from "react";
import menuIcon from "../Assets/menu icon.png";
import closeMenuIcon from "../Assets/close menu.png";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="nav-con">
          <a className="nav-logo" href="/">
            EXOTICLUB
          </a>
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="flex items-center justify-end md:hidden w-6 ml-auto"
          >
            <img src={!nav ? menuIcon : closeMenuIcon} alt="" />
          </div>
          <div
            className={
              nav
                ? "h-screen fixed left-0 bg-neutral-900 w-full top-16 px-4 pt-20"
                : "hidden"
            }
          >
            <div className="grid gap-4">
              <Link
                onClick={() => {
                  setNav(false);
                }}
                to="/"
              >
                <button className="btn-ghost">Home</button>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                to="/rent-a-car"
              >
                <button className="btn-ghost">Rent a Car</button>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                to="/membership"
              >
                <button className="btn-ghost">Membership</button>
              </Link>
              <Link
                onClick={() => {
                  setNav(false);
                }}
                to="/chauffers"
              >
                <button className="btn-ghost">Chauffers</button>
              </Link>
            </div>
          </div>
          <div className="nav-links">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/rent-a-car">
              Rent a Car
            </Link>
            <Link className="nav-link" to="/membership">
              Membership
            </Link>
            <Link className="nav-link" to="/chauffers">
              Chauffers
            </Link>
          </div>
          <div className="nav-cta">
            <p>888-123-456</p>
            <button className="btn-ghost">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
