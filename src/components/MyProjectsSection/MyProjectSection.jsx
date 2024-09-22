import React from "react";
import styles from "./MyProjectsSection.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { AppContext } from "../../App";

const MyProjectSection = () => {
  const { myProjectsData } = React.useContext(AppContext);
  //   console.log(myProjectsData);

  return (
    <>
      <section id="my-project-section" className={styles["my-project-section"]}>
        <div className="container">
          <h1 className={styles["my-project-section__title"]}>Мои проекты</h1>
          <div className={styles["my-project-section-row"]}>
            {myProjectsData.map((item) => (
              <ProjectCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MyProjectSection;
