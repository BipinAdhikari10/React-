import "../css/./mid.css";
import midImage from "../assets/images/digital.jpg";
import { CiDesktop } from "react-icons/ci";
const Mid = () => {
  return (
    <>
      <div className="container middle-section">
        <div className="middle-header">
          <p className="text-wrapper features">features</p>
          <h2 className="section-header">
            Everything you need in a modern bank <br /> and more.
          </h2>
        </div>
        <div className="container middle-section-wrapper">
          <div className="middle-image">
            <img className="mid-image" src={midImage} alt="digital image" />
          </div>
          <div className="middle-section-wrapper-container">
            <div className="desktop-icon">
              {" "}
              <CiDesktop />
            </div>
            <h3 className="middle-heading">100% digital bank</h3>
            <p className="middle-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              alias sint quos? Accusantium a fugiat porro reiciendis saepe
              quibusdam debitis ducimus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mid;
