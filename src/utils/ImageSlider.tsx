import { useEffect, useState } from "react";

export default function ImageSlider(props: imageSliderProps){
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${props.slides[currentIndex].src})`
    };
    const sliderStyles = { 
        height: '100%',
        position: 'relative' as 'relative'  
    };
    const leftArrowStyles = {  
        position: 'absolute' as 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '100px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'  
    };
    const rightArrowStyles = { 
        position: 'absolute' as 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '100px',
        color: '#fff',
        zIndex: 1,
        cursor: 'pointer'  
    };

    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? props.slides.length - 1 : currentIndex -1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () =>{
        const isLastSlide = currentIndex === props.slides.length -1; 
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    }

    useEffect(() => {
        const timerId = setInterval(() => {
            goToNext();
        }, 2000);

        return () => clearInterval(timerId);
    });

    return(
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious} > ‹ </div>
            <div style={rightArrowStyles} onClick={goToNext} > › </div>
            <div style={slideStyles}></div> 
        </div>
    )
}

export interface imageSliderProps{
    slides: slide[];
}

export interface slide{
    src: string;
    alt?: string
}