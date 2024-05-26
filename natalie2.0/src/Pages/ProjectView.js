import { useNavigate } from "react-router-dom";
import NavBar from "../Components/Navbar";

const ProjectView = () => {
  const navigate = useNavigate();
  return (
    <div className="container2">
      <NavBar />
      <p>title</p>
    </div>
  );
};

export default ProjectView;
