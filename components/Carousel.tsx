import Image from 'next/image';
import { memo, useCallback, useMemo, useState } from 'react';
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

const ImageMemo = memo(Image);

export default function Carousel({ slides, onSlideChange }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  const changeSlide = useCallback(
    (newIndex: number) => {
      setCurrent(newIndex);
      onSlideChange(newIndex);
    },
    [onSlideChange]
  );

  const previousSlide = useCallback(() => {
    changeSlide(current === 0 ? slides.length - 1 : current - 1);
  }, [current, slides.length, changeSlide]);

  const nextSlide = useCallback(() => {
    changeSlide(current === slides.length - 1 ? 0 : current + 1);
  }, [current, slides.length, changeSlide]);

  const slideImages = useMemo(
    () =>
      slides.map((s, i) => (
        <ImageMemo
          key={i}
          src={s.img}
          alt={s.alt}
          width={1024}
          height={1024}
          className='italic'
        />
      )),
    [slides]
  );

  const slideIndicators = useMemo(
    () =>
      slides.map((_, i) => (
        <div
          onClick={() => changeSlide(i)}
          key={'circle' + i}
          className={`rounded-full w-5 h-5 cursor-pointer ${
            i === current ? 'bg-rioGrande-600' : 'bg-rioGrande-950'
          }`}></div>
      )),
    [slides, current, changeSlide]
  );

  return (
    <div className='overflow-hidden relative max-w-[64rem] max-h-[36rem] rounded-lg'>
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}>
        {slideImages}
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
        {slideIndicators}
      </div>
    </div>
  );
}
