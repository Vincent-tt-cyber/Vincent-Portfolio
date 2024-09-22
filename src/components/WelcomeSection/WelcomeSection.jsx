import styles from "./WelcomeSection.module.scss";
import UserAvatr from "../../assets/user-avatar.jpg";

const WelcomeSection = () => {
  return (
    <>
      <section className={styles["welcome-section"]}>
        <div>
          <h1>Привет, меня зовут Евгений</h1>
          <p>Я Frontend Разработчик</p>
        </div>
        <div className={styles['welcome-section__img-cover']}>
          <img src={UserAvatr} alt="User" />
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
