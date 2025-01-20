import { Link } from "react-scroll";
import Logo from "../assets/images/logo.png";
import "../css/Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="w-screen text-white navBar bg-black bg-opacity-30 backdrop-blur-md">
        <div className="navbar_outer flex items-center">
          <div className="navbar_left">
            <Link to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{cursor: "pointer"}}><img className="imgLogo" src={Logo} alt="logo..."></img></Link>
          </div>
          <div className="navbar_right font view_mobile flex items-center gap-1 pr-5">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer hover:bg-white hover:text-black p-2 rounded-full text-xl">Home</div>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer hover:bg-white hover:text-black p-2 rounded-full">About</div>
            </Link>
            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer hover:bg-white hover:text-black p-2 rounded-full">Events</div>
            </Link>
            <Link
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer hover:bg-white hover:text-black p-2 rounded-full">Team</div>
            </Link>
            <Link
              to="contact us"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              <div className="navbar_right_content cursor-pointer hover:bg-white hover:text-black p-2 rounded-full">
                Contact Us
              </div>
            </Link>
          </div>
          <div className="view">
            <div className="hamburger-menu">
              <input id="menu__toggle" type="checkbox" />
              <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
              </label>

              <ul className="menu__box h-fit">
                <li>
                  <Link
                    className="menu__item"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="menu__item"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    className="menu__item"
                    to="events"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="menu__item"
                    to="team"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    className="menu__item"
                    to="contact us"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
