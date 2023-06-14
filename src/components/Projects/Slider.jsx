import React from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';

const Slider = ({ children: slides }) => {
  const buttonClasses = `p-5 rounded-full shadow-lg bg-royalBlue-600 text-royalBlue-950 hover:bg-mistGray-50 transition-colors pointer-events-auto`;

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
      <div className='absolute inset-0 flex items-center justify-between p-28 pointer-events-none'>
        <button onClick={prevSlide} className={buttonClasses}>
          <HiOutlineChevronLeft size={40} />
        </button>
        <button onClick={nextSlide} className={buttonClasses}>
          <HiOutlineChevronRight size={40} />
        </button>
      </div>
      <div className='p-5'>
        <div>
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].description}</p>
        </div>
        <div>
          <button
            onClick={() =>
              window.open(slides[currentSlide].repositoryUrl, '_blank')
            }>
            Repository
          </button>
          <button
            onClick={() =>
              window.open(slides[currentSlide].liveDemoUrl, '_blank')
            }>
            Live Demo
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5'>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
      transition w-10 h-2 rounded-xl cursor-pointer
      ${currentSlide === index ? 'bg-royalBlue-600' : 'bg-royalBlue-950'}
      `}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
