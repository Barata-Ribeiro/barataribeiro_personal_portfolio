import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <section className='h-screen bg-mistGray-950'></section>
      <Projects />
      <Footer />
    </>
  );
}

export default App;
