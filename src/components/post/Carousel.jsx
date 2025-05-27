import { useState } from 'react';
import './Carousel.css';

export default function Carousel() {
    const images = [
        "/assets/images/image1.jpg",
        "/assets/images/image2.jpg",
        "/assets/images/image3.jpg"
    ];

    const [carouselIndex, setCarouselIndex] = useState(0);
    const totalImages = images.length;

    const handlePrev = () => {
        setCarouselIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    const handleNext = () => {
        setCarouselIndex((prevIndex) =>
            prevIndex < totalImages - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const currentImage = images[carouselIndex];

    return (
        <article className="flexColumn">
            <div
                className="backgroundBlur"
                style={{ backgroundImage: `url(${currentImage})` }}
            ></div>

            <img src={currentImage} alt="carousel" className="mainImage" />

            <button className="buttonLeft" onClick={handlePrev}>
                <i className="bi bi-arrow-left-circle"></i>
            </button>
            <button className="buttonRight" onClick={handleNext}>
                <i className="bi bi-arrow-right-circle"></i>
            </button>

            <div className="imageIndex flexRowSB">
                <p>{carouselIndex + 1}</p>
                <p>/</p>
                <p>{totalImages}</p>
            </div>
        </article>
    );
}
