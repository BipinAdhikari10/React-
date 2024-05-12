import Hero from "./Hero";
import Navigation from "./Navigation";
import "../css/header.css";
const Header = () => {
  return (
    <>
      <header className="container">
        <Navigation />

        <Hero />
      </header>
    </>
  );
};
export default Header;
