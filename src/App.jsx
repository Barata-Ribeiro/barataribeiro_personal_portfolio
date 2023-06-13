import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const HeaderMemo = React.memo(Header);

function App() {
  return (
    <div className='flex flex-col items-center h-full'>
      <HeaderMemo />
      <Hero />
    </div>
  );
}

export default App;
