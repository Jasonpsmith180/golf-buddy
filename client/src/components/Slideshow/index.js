import React, { useState, useEffect, useRef } from 'react';
import slide1 from '../../images/slide1.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';

const colors = [ slide1, slide2, slide3 ];
const delay = 5000

const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () => 
                setIndex((prevIndex) => 
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );
        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div 
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundImage, index) => (
                    <img className="slide" key={index} src={backgroundImage}/>
                ))}
            </div>
            <div className="slideshowDots">
                {colors.map((_, i) => (
                    <div 
                        key={i} 
                        className={`slideshowDot${index === i ? " active" : ""}`}
                        onClick={() => {
                            setIndex(i);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;