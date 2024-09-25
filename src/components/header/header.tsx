'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const slides = [
    {
      image: '/betle.jpg?height=600&width=1200',
      title: 'CREA TU LISTA DE REGALOS',
      subtitle: 'Compártela con tus seres queridos',
    },
    {
      image: '/prem.jpg?height=600&width=1200',
      title: 'PLANIFICA TU BODA',
      subtitle: 'Organiza cada detalle con facilidad',
    },
    {
      image: '/photo.jpeg?height=600&width=1200',
      title: 'COMPARTE TUS MOMENTOS',
      subtitle: 'Crea recuerdos inolvidables',
    },
  ];

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  }, [slides.length]);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(handleNextSlide, 5000);
    return () => clearInterval(timer);
  }, [handleNextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNextSlide();
    }

    if (touchStart - touchEnd < -150) {
      handlePrevSlide();
    }
  };

  return (
    <div 
      className="relative w-full h-[calc(100vh-4rem)] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center 30%"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col items-start justify-end text-white p-4 sm:p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif mb-2 sm:mb-4 max-w-full sm:max-w-2xl">
              {slide.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2 sm:mb-4 max-w-full sm:max-w-2xl">
              {slide.subtitle}
            </p>
            <button className="border-2 border-white px-4 py-1 sm:px-6 sm:py-2 text-sm sm:text-base md:text-lg hover:bg-white hover:text-black transition-colors duration-300 mb-2 sm:mb-4">
              COMENCEMOS
            </button>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100 transition-opacity duration-300"
        onClick={handlePrevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl opacity-50 hover:opacity-100 transition-opacity duration-300"
        onClick={handleNextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}