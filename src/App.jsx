import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';

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
