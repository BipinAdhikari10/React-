import heroImage from "../assets/images/hero.png";
import "../css/Hero.css";
import { FaArrowDownLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <>
      <div className="container hero-section">
        <div className="hero-header">
          <h1 className="hero-heading">
            When <span className="highlight">banking</span> meets <br />{" "}
            <span className="highlight"> minimalist</span>
          </h1>
          <p className="hero-para">
            A simpler banking experience for a simpler life.
          </p>
          <a className="hero-link" href="#">
            Learn More{" "}
            <span className="down">
              <FaArrowDownLong />
            </span>
          </a>
        </div>

        <img className="hero-image" src={heroImage} alt="hero image" />
      </div>
    </>
  );
};

export default Hero;
