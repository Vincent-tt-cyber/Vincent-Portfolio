import React from "react";
import MyProjectSection from "./components/MyProjectsSection/MyProjectSection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";

export const AppContext = React.createContext({});
function App() {
  const [myProjectsData, setMyProjectsData] = React.useState([]);

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

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ myProjectsData }}>
      <WelcomeSection />
      <div className="container">
        <MyProjectSection />
      </div>
    </AppContext.Provider>
  );
}

export default App;
