import React from 'react';
import Header from './components/Header';

// const HeaderMemo = React.memo(Header);

function App() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <Header />
    </div>
  );
}

export default App;
