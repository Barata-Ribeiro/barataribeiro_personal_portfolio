import React from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineCode } from 'react-icons/hi';

const Footer = () => {
  const year = new Date().getFullYear();

  // state for modal
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  // it's a good practice to bind modal to your appElement
  Modal.setAppElement('#root');

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90%',
      width: '400px',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#f7f7f5',
      zIndex: '9999',
    },
  };

  return (
    <footer className='bg-mistGray-900'>
      <div className='container mx-auto flex flex-col items-center py-10'>
        <a
          href='http://barataribeiro.com/'
          className='flex items-center uppercase font-Kanit font-semibold tracking-wider text-mistGray-50'>
          Barata
          <HiOutlineCode className='text-rioGrande-500 mx-1 text-xl' />
          Ribeiro
        </a>
        <p className='text-center text-slate-50 mt-2'>
          Copyright © {year} -{' '}
          <span className='cursor-pointer' onClick={() => setModalIsOpen(true)}>
            Some rights reserved.
          </span>
        </p>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}>
          <h2 className='text-3xl font-Kanit font-bold mb-4 text-mistGray-800 tracking-wide'>
            Terms of Service
          </h2>
          <p className='text-base font-Roboto mb-4 text-mistGray-950'>
            Some images used on this website may be sourced from third-party
            providers. These images are used for illustrative purposes and are
            subject to their respective licenses and terms. The owner does not
            claim ownership of third-party images used on this portfolio.
            <br />
            <br />
            The logo displayed on this website is the original design and
            property of the website owner. Unauthorized use, reproduction, or
            modification of the logo is strictly prohibited.
            <br />
            <br />
            If you have any questions or concerns, please contact the owner
            through the provided contact information on this website.
          </p>
          <button
            className='float-right bg-royalBlue-500 border-2 border-royalBlue-600 py-2 px-6 rounded shadow text-mistGray-50 text-xl cursor-pointer hover:text-royalBlue-500 hover:border-royalBlue-500 hover:bg-mistGray-50'
            onClick={() => setModalIsOpen(false)}>
            <AiOutlineClose />
          </button>
        </Modal>
      </div>
    </footer>
  );
};

export default Footer;
