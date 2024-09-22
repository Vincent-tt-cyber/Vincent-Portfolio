import styles from "./WelcomeSection.module.scss";
import UserAvatr from "../../assets/user-avatar.jpg";
import { MoveDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  const handleScroll = () => {
    const element = document.getElementById("my-project-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  return (
    <>
      <section className={styles["welcome-section"]} id="welcome-section">
        <div className="container">
          <div className={styles["welcome-section-row"]}>
            <div className={styles["welcome-section-info"]}>
              <TypeAnimation
                sequence={["Junoir React Developer", 5000]}
                wrapper="h1"
                repeat={Infinity}
              />
              <motion.p
                animate={{
                  opacity: [0, 1],
                  transition: { duration: 1, delay: 2, type: "spring" },
                }}
              >
                Привет, меня зовут Евгений Петров, я web разработчик.
              </motion.p>
              <MoveDown
                onClick={() => handleScroll()}
                strokeWidth={3}
                className={styles["welcome-section__icon"]}
              />
            </div>
            <div className={styles["welcome-section__img-cover"]}>
              <img src={UserAvatr} alt="User" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
