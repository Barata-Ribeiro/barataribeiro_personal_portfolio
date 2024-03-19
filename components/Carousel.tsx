import Image from "next/image"
import { memo, useCallback, useMemo, useState } from "react"
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs"

interface Slide {
  img: string
  alt: string
}

interface CarouselProps {
  slides: Slide[]
  onSlideChange: (index: number) => void
}

const ImageMemo = memo(Image)

export default function Carousel({ slides, onSlideChange }: CarouselProps) {
  let [current, setCurrent] = useState(0)

  const changeSlide = useCallback(
    (newIndex: number) => {
      setCurrent(newIndex)
      onSlideChange(newIndex)
    },
    [onSlideChange]
  )

  const previousSlide = useCallback(() => {
    changeSlide(current === 0 ? slides.length - 1 : current - 1)
  }, [current, slides.length, changeSlide])

  const nextSlide = useCallback(() => {
    changeSlide(current === slides.length - 1 ? 0 : current + 1)
  }, [current, slides.length, changeSlide])

  const slideImages = useMemo(
    () =>
      slides.map((s, i) => (
        <ImageMemo
          key={i}
          src={s.img}
          alt={s.alt}
          width={1024}
          height={1024}
          className="block h-auto w-auto max-w-full italic"
          priority={i === current}
          sizes="100vw"
        />
      )),
    [current, slides]
  )

  const slideIndicators = useMemo(
    () =>
      slides.map((_, i) => (
        <div
          onClick={() => changeSlide(i)}
          key={"circle" + i}
          className={`h-3 w-3 cursor-pointer rounded-full md:h-5 md:w-5 ${
            i === current ? "bg-rioGrande-600" : "bg-rioGrande-950"
          }`}
        ></div>
      )),
    [slides, current, changeSlide]
  )

  return (
    <div className="relative max-h-[36rem] max-w-[62rem] overflow-hidden rounded-lg">
      <div
        className={`duration-40 flex transition ease-out`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slideImages}
      </div>

      <div className="absolute top-0 flex h-full w-full items-center justify-between px-5 text-3xl text-royalBlue-600 md:px-10 md:text-4xl">
        <button
          onClick={previousSlide}
          aria-label="Go to left slide"
          className="hover:text-royalBlue-300"
        >
          <BsFillArrowLeftCircleFill />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Go to right slide"
          className="hover:text-royalBlue-300"
        >
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slideIndicators}
      </div>
    </div>
  )
}
