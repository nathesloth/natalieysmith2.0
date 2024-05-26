// Home.js
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";
import styles from "../index.css";
import "./Home.scss";
import HeroContainer from "../Components/HeroContainer";
import Project from "../Components/Projects/Project";
import Footer from "../Components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div data-scroll data-scroll-speed="1" className="container">
      <div className="header">
        <NavBar />
        {/* <div className="hero"><HeroContainer /></div> */}
      </div>

      <div className="main-page ">
        <h1>
          Hi! My name is Nat Smith. I love tech, design, and to create many
          other things
        </h1>
      </div>

      <Project />
      <Footer />
    </div>
  );
};

export default Home;
