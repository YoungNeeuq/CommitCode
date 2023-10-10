import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
const Banner = () => {
  const slides = [{ url: "./img/slider-1.jpg" }, { url: "./img/slider-2.jpg" }, { url: "./img/slider-3.jpg" }]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <div className="lg:max-w-[1300px] lg:h-[780px] md:max-w-[860px] md:h-[465px] sm:max-w-[810px] sm:h-[400px] max-w-[450px] h-[265px]  w-full m-auto  mb-5 group static">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      <div className="hidden group-hover:block absolute lg:top-[60%] md:top-[40%] sm:top-[40%] top-[30%] -translate-x-0 translate-y-[-50%] left-auto text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute lg:top-[60%] md:top-[40%] sm:top-[40%] top-[30%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  )
}

export default Banner
