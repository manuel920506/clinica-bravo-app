import { useEffect, useState } from "react";

export default function ImageSlider(props: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    borderRadius: '10px',
    width: '100%', // Imposta la larghezza del carosello 
    position: 'relative' as 'relative',
    overflow: 'hidden', 
    height: '540px'
  };

  const slideContainerStyles = {  
    height: '100%',
    display: 'flex',
    width: `${props.slides.length * 100}%`, // La larghezza totale è proporzionale al numero di immagini
    transition: 'transform 1s ease-in-out',
    transform: `translateX(-${currentIndex * (100 / props.slides.length)}%)`
  };

  const slideStyles = {
    width: `${100 / props.slides.length}%`, // Ogni immagine occupa uno spazio uguale
    height: '100%', // L'altezza del carosello
    flexShrink: 0, // Evita che le immagini si riducano
  };

  const leftArrowStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    fontSize: '100px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    fontSize: '100px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === props.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      goToNext();
    }, 3000); // Scorre ogni 3 secondi

    return () => clearInterval(timerId);
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>‹</div>
      <div style={rightArrowStyles} onClick={goToNext}>›</div>

      <div style={slideContainerStyles}>
        {props.slides.map((slide, index) => (
          <img
            key={index}
            src={slide.src}
            alt={slide.alt}
            style={slideStyles} // Applica lo stile a ogni immagine
          />
        ))}
      </div>
    </div>
  );
}

export interface ImageSliderProps {
  slides: Slide[];
}

export interface Slide {
  src: string;
  alt?: string;
}
