import Image from 'next/image';
import { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

interface CarouselProps {
  slides: string[];
  onSlideChange: (index: number) => void;
}

export default function Carousel({ slides, onSlideChange }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    const newIndex = current === 0 ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
    onSlideChange(newIndex);
  };

  let nextSlide = () => {
    const newIndex = current === slides.length - 1 ? 0 : current + 1;
    setCurrent(newIndex);
    onSlideChange(newIndex);
  };

  return (
    <div className='overflow-hidden relative max-w-[64rem] max-h-[36rem] rounded-lg'>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}>
        {slides.map((s, i) => {
          return <Image key={i} src={s} alt='' width={1024} height={1024} />;
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between items-center flex text-mistGray-50 px-10 text-3xl'>
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((_, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={'circle' + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? 'bg-mistGray-50' : 'bg-mistGray-500'
              }`}></div>
          );
        })}
      </div>
    </div>
  );
}
