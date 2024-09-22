import React from "react";
import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className={styles["project-card"]}>
      <img
        className={styles["project-card__image"]}
        src={props.imageURL}
        alt={props.title}
      />
      <h3 className={styles["project-card__title"]}>{props.title}</h3>
      <p className={styles["project-card__description"]}>{props.description}</p>
      <div className={styles["project-card-tools"]}>
        {props.tools.map((item) => (
          <span key={item} className={styles["project-card-tool"]}>
            {item}
          </span>
        ))}
      </div>
      <Link
        to={props.linkVercel}
        target="_blank"
        className={styles["project-card__link"]}
      >
        Открыть в Vercel
      </Link>
      {/* <Link>Открыть в GitHub</Link> */}
    </div>
  );
};

export default ProjectCard;
