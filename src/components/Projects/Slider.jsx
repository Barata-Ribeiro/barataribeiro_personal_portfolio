import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

const Slider = ({ children: slides }) => {
  const buttonClasses = `p-5 rounded-full shadow-lg bg-royalBlue-600 text-royalBlue-950 hover:bg-mistGray-50 transition-colors`;

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const prevSlide = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  const nextSlide = () =>
    setCurrentSlide((currentSlide) =>
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );

  return (
    <div className='overflow-hidden relative'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}>
        {slides}
      </div>
      <div className='absolute inset-0 flex items-center justify-between p-28'>
        <button onClick={prevSlide} className={buttonClasses}>
          <HiOutlineChevronLeft size={40} />
        </button>
        <button onClick={nextSlide} className={buttonClasses}>
          <HiOutlineChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
