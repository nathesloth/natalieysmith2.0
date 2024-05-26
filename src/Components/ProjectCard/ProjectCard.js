import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.scss";

const ProjectCard = ({ title, image, date, link }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => navigate(link)}
      ></div>
      <h2 className="card-title">{title}</h2>
      <p>{date}</p>
    </div>
  );
};

export default ProjectCard;
