import Image from 'next/image';
import { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

interface Slide {
  img: string;
  alt: string;
}

interface CarouselProps {
  slides: Slide[];
  onSlideChange: (index: number) => void;
}

export default function Carousel({ slides, onSlideChange }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  const changeSlide = (newIndex: number) => {
    setCurrent(newIndex);
    onSlideChange(newIndex);
  };

  const previousSlide = () => {
    changeSlide(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    changeSlide(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className='overflow-hidden relative max-w-[64rem] max-h-[36rem] rounded-lg'>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}>
        {slides.map((s, i) => {
          return (
            <Image
              key={i}
              src={s.img}
              alt={s.alt}
              width={1024}
              height={1024}
              className='italic'
            />
          );
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between items-center flex text-royalBlue-600 px-10 text-3xl md:text-4xl'>
        <button
          onClick={previousSlide}
          aria-label='Go to left slide'
          className='hover:text-royalBlue-300'>
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={nextSlide}
          aria-label='Go to right slide'
          className='hover:text-royalBlue-300'>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((_, i) => {
          return (
            <div
              onClick={() => changeSlide(i)}
              key={'circle' + i}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i == current ? 'bg-rioGrande-600' : 'bg-rioGrande-950'
              }`}></div>
          );
        })}
      </div>
    </div>
  );
}
