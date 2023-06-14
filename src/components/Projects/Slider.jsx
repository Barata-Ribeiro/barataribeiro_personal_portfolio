import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2';
import { FaCode, FaRegPlayCircle } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const buttonClasses = `p-5 rounded-full shadow-lg bg-royalBlue-600 text-royalBlue-950 hover:bg-mistGray-50 transition-colors pointer-events-auto`;

  const smallButtonClasses = `flex items-center gap-1 px-2 py-1 bg-royalBlue-500 text-mistGray-50 rounded-lg text-sm font-semibold border-2 border-royalBlue-600
  hover:bg-mistGray-50 hover:border-royalBlue-500 hover:text-royalBlue-500`;

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
    <div className='overflow-hidden'>
      <div className='relative'>
        {/* IMAGES */}
        <div
          className='flex transition-transform ease-out duration-500'
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}>
          {slides.map((slide) => (
            <LazyLoadImage
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              height={600}
              width={1400}
              className='max-w-[87.5rem] flex-shrink-0'
              style={{
                boxShadow: 'inset 0px 0px 50px -5px rgba(39, 38, 35, 0.25)',
              }}
              effect='blur'
            />
          ))}
        </div>

        {/* MAIN CONTROLLERS */}
        <div className='absolute flex items-center justify-between inset-0 p-28 pointer-events-none'>
          <button onClick={prevSlide} className={buttonClasses}>
            <HiOutlineChevronLeft size={40} />
          </button>
          <button onClick={nextSlide} className={buttonClasses}>
            <HiOutlineChevronRight size={40} />
          </button>
        </div>
      </div>

      {/* PROJECT INFO */}
      <div className='flex flex-col items-center my-6 gap-3'>
        <div>
          <h2 className='font-Kanit font-semibold text-4xl text-center'>
            {slides[currentSlide].title}
          </h2>
          <p className='max-w-[28.75rem] leading-relaxed text-center text-mistGray-600'>
            {slides[currentSlide].description}
          </p>
        </div>
        <div className='flex flex-col items-center gap-1'>
          <button
            className={smallButtonClasses}
            onClick={() =>
              window.open(slides[currentSlide].repositoryUrl, '_blank')
            }>
            Repository <FaCode />
          </button>
          <button
            className={smallButtonClasses}
            onClick={() =>
              window.open(slides[currentSlide].liveDemoUrl, '_blank')
            }>
            Demo <FaRegPlayCircle />
          </button>
        </div>
      </div>

      {/* SECONDARY CONTROLLERS */}
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
