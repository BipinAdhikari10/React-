import "../css/./mid.css";
import midImage from "../assets/images/digital.jpg";
const Mid = () => {
  return (
    <>
      <div className="middle-section">
        <div className="middle-header">
          <p className="text-wrapper features">features</p>
          <h2 className="section-header">
            Everything you need in a modern bank <br /> and more.
          </h2>
        </div>
        <div className="container middle-section-wrapper">
          <div className="middle-image">
            <img className="hero-image" src={midImage} alt="digital image" />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
export default Mid;
