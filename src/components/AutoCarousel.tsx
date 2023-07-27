import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const AutoCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const carouselItems = [
    { src: "./Image-1.svg", alt: "Image 1" },
    { src: "./Image-2.svg", alt: "Image 2" },
    { src: "./Image-3.svg", alt: "Image 3" },
    { src: "./Image-4.svg", alt: "Image 4" },
    { src: "./Image-5.svg", alt: "Image 5" },
    { src: "./Image-6.svg", alt: "Image 6" },
    { src: "./Image-7.svg", alt: "Image 7" },
    { src: "./Image-8.svg", alt: "Image 8" },
  ];

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      selectedItem={activeSlide}
      onChange={handleSlideChange}
    >
      {carouselItems.map((item, index) => (
        <div key={index}>
          {/* <Image src={item.src} alt={item.alt} width={2} height={2} /> */}
          <img src={item.src} alt={item.alt} height="2px" width="2px" className="px-1" />
        </div>
      ))}
    </Carousel>
  );
};

export default AutoCarousel;
