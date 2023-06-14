import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

const HeaderMemo = React.memo(Header);

function App() {
  return (
    <div className='flex flex-col items-center h-full'>
      <HeaderMemo />
      <Hero />
      <About />
    </div>
  );
}

export default App;
