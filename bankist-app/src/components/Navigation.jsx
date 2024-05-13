import logoImage from "../assets/images/logo.png";
import "../css/navigation.css";

const Navigation = () => {
  return (
    <>
      <header className="container">
        <div className="navigation">
          <img className="logo-image" src={logoImage} alt="logo image" />
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
            <button className="btn btn-account">Open Account</button>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Navigation;
