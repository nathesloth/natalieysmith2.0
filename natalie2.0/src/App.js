// App.js
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Gallery from "./Pages/Gallery.js";
import ProjectView from "./Pages/ProjectView.js";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Gallery />} />
        <Route path="/projects/honne" element={<ProjectView />} />
        <Route path="/projects/mockar" element={<ProjectView />} />
        <Route path="/projects/collabwall" element={<ProjectView />} />
        <Route path="/projects/qps" element={<ProjectView />} />
        <Route path="/projects/stemball" element={<ProjectView />} />
      </Routes>
    </>
  );
};

export default App;
