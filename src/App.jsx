import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [projectsData, setProjectsData] = React.useState([]);
  const [intensiveCoursesData, setIntensiveCoursesData] = React.useState([]);

  React.useEffect(() => {
    fetch("/barataribeiro_personal_portfolio/assets/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data.projects);
        setIntensiveCoursesData(data.intensiveCourses);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects projects={projectsData} />
      <Education intensiveCourses={intensiveCoursesData} />
      <Footer />
    </>
  );
}

export default App;
