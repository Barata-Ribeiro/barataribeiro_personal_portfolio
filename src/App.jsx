import React from "react";
import { projects, intensiveCourses } from "./data/data.json";
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
    setProjectsData(projects);
    setIntensiveCoursesData(intensiveCourses);
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
