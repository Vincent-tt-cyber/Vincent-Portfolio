import React from "react";
import styles from "./ModalProject.module.scss";
import { AppContext } from "../../App";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
const ModalProject = ({ currentProject }) => {
  const { isOpenModal, setIsOpenModal } = React.useContext(AppContext);

  const handleCloseModal = () => {
    isOpenModal && setIsOpenModal(false);
  };

  return (
    <div className={styles["modal-project"]}>
      <div className={styles["modal-project__window"]}>
        <X
          strokeWidth={3}
          className={styles["modal-project__close"]}
          onClick={handleCloseModal}
        />
        <h1>{currentProject.title}</h1>
        <p>{currentProject.description}</p>
        <ul className={styles["modal-project__stack"]}>
          {currentProject.tools.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className={styles["modal-project__links"]}>
          <Link
            className={styles["modal-project__link"]}
            to={currentProject.projectLink}
            target="_blank"
          >
            Открыть в Vercel
          </Link>
          <Link
            className={styles["modal-project__link"]}
            to={currentProject.gitLink}
            target="_blank"
          >
            Открыть в GitHub
          </Link>
        </div>
        <div className={styles["modal-project__iframe"]}>
          <iframe
            src={currentProject.projectLink}
            frameborder={0}
            width={"100%"}
            height={"100%"}
          ></iframe>
          <p>Здесь вы можете взаимойдействовать с проектом.</p>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;
