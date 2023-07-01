import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

const HeaderMemo = React.memo(Header);

function App() {
  return (
    <>
      <HeaderMemo />
      <Hero />
      <About />
      <Projects />
      <Education />
      <Footer />
    </>
  );
}

export default App;
