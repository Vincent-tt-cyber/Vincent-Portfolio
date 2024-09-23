import React from "react";
import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const ProjectCard = (props) => {
  const { isOpenModal, setIsOpenModal, handleOpenModelProject } =
    React.useContext(AppContext);

  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card__cover"]}>
        <img
          className={styles["project-card__image"]}
          src={props.imageURL}
          alt={props.title}
        />
      </div>
      <h3 className={styles["project-card__title"]}>{props.title}</h3>
      <p className={styles["project-card__description"]}>{props.description}</p>
      <button
        className={styles["project-card__button"]}
        onClick={() => handleOpenModelProject(props.id)}
      >
        Открыть проект
      </button>
    </div>
  );
};

export default ProjectCard;
