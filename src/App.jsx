import React from "react";
import MyProjectSection from "./components/MyProjectsSection/MyProjectSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import ModalProject from "./components/ModalProject/ModalProject";

export const AppContext = React.createContext({});

function App() {
  const [myProjectsData, setMyProjectsData] = React.useState([]);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const [currentProject, setCurrentProject] = React.useState({});

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://66af55c7b05db47acc5991e3.mockapi.io/myProjects/"
      ).then((res) => res.json());
      // console.log(data);
      setMyProjectsData(data);
    } catch (error) {
      console.error(error);
      setMyProjectsData([]);
    }
  };
  const handleOpenModelProject = (id) => {
    setIsOpenModal(true);
    handleCurrentProject(id);
  };

  const handleCurrentProject = (id) => {
    const currentProject = myProjectsData.find((item) => item.id === id);
    console.log(currentProject);
    setCurrentProject(currentProject);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenModal]);

  return (
    <AppContext.Provider
      value={{
        myProjectsData,
        isOpenModal,
        setIsOpenModal,
        handleOpenModelProject,
      }}
    >
      {isOpenModal && <ModalProject currentProject={currentProject} />}
      <WelcomeSection />
      <div className="container">
        <MyProjectSection />
      </div>
    </AppContext.Provider>
  );
}

export default App;
