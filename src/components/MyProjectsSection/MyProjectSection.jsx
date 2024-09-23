import React from "react";
import styles from "./MyProjectsSection.module.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { AppContext } from "../../App";
import { motion } from "framer-motion";
const MyProjectSection = () => {
  const { myProjectsData } = React.useContext(AppContext);
  //   console.log(myProjectsData);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
        // viewport={{ once: true, amount: 0.5  }}
        id="my-project-section"
        className={styles["my-project-section"]}
      >
        <motion.div
          className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <h1 className={styles["my-project-section__title"]}>Мои проекты</h1>
          <div className={styles["my-project-section-row"]}>
            {myProjectsData.map((item) => (
              <ProjectCard key={item.id} {...item} />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default MyProjectSection;
