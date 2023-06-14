import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects/Projects';

const HeaderMemo = React.memo(Header);

function App() {
  return (
    <div className='flex flex-col items-center h-full'>
      <HeaderMemo />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
