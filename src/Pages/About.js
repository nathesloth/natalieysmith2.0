import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";
import styles from "./About.scss";

import profile from "../Assets/profile.JPG";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container2">
      <NavBar />
      <div className="title">
        <h1>About</h1>
      </div>

      <div className="main about-section ">
        <div className="about-testimonial">
          <h2>Hi! My name is Natalie Smith, and I'm a creative technologist</h2>

          <p>
            TLDR;
            <br></br>
            <br></br>
            In all honesty, when describing what I want to be I sometimes don't
            know how to properly respond. As someone who loves to design but
            also build through code, I feel that I can't list myself as a
            singular role. I've worked on projects as a Front End Developer,
            having to code, test and build web apps within agile teams. I've
            worked on projects as a UX/UI designer, in which I had to develop
            designs and concepts to represent brands to their requirements.
          </p>
        </div>
        <div className="about-section-image">
          <img src={profile} />
        </div>
      </div>
      {/* <button className="btn" onClick={() => navigate("order-summary")}>
        Place Order
      </button> */}
    </div>
  );
};

export default About;
