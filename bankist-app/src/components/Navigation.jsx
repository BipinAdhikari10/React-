import logoImage from "../assets/images/logo.png";
import "../css/navigation.css";
// import Hero from "./Hero";
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <img src={logoImage} alt="A logo image of bankist" />
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#">Features</a>
          </li>
          <li className="nav-link">
            <a href="#">Operations</a>
          </li>
          <li className="nav-link">
            <a href="#">Testimonials</a>
          </li>
          <button className="btn btn-operations">Open account</button>
        </ul>
      </div>
    </>
  );
};
export default Navigation;
