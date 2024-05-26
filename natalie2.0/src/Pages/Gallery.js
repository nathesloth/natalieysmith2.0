import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";
import ProjectCard from "../Components/ProjectCard/ProjectCard";
import Footer from "../Components/Footer/Footer";
import styles from "./Gallery.scss";

const Gallery = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: "HONNE NSWY | Dynamic Visual Identity",
      image:
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      date: "2022",
      link: "honne",
    },
    {
      title: "Mock AR | Augmented Interaction Project",
      image:
        "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      date: "2023",
      link: "mockar",
    },
    {
      title: "Interactive Wall Design",
      image:
        "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      date: "2023",
      link: "collabwall",
    },
    {
      title: "Queensland Police | Database UI Dashboard",
      image:
        "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      date: "2023",
      link: "qps",
    },
    {
      title: "QUT STEM Ball | Social Media Marketing & Graphics",
      image:
        "https://assets-global.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      date: "2023",
      link: "stemball",
    },
  ];

  return (
    <div className="container2">
      <NavBar />
      <div className="title main">
        <h1>Projects</h1>

        <p>View more of my projects!</p>

        <div className="projects-grid">
          {examples.map((item, index) => (
            <ProjectCard
              title={item.title}
              image={item.image}
              date={item.date}
              link={item.link}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
