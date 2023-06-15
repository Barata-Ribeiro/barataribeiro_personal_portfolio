import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer';

const HeaderMemo = React.memo(Header);

function App() {
  return (
    <div className='flex flex-col items-center h-full'>
      <HeaderMemo />
      <div className='bg-mistGray-50 max-w-[60rem] mx-auto shadow-lg flex flex-col items-center'>
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
