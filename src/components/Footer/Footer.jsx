import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='pt-10 pb-10 bg-slate-900'>
      <div className='text-base text-center'>
        <p className='text-slate-50'>
          © {year} Copyright: <a href='http://barataribeiro.com/'>Barata Ribeiro</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
