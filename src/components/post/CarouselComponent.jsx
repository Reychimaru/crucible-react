import {Link} from 'react-router-dom'
import { useState } from 'react';
import './CarouselComponent.css';

export default function CarouselComponent({ content }) {
    const images = content

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
        <article className="flexColumn carouselContainer">
            <div
                className="backgroundBlur"
                style={{ backgroundImage: `url(${currentImage})` }}
            ></div>
            <Link to={`/post/${content.postId}`} className="flexRow">
            <img src={currentImage} alt="carousel" className="mainImage" />
            </Link>

            {content.length > 1 && (
                <>
            <button className="buttonLeft" onClick={handlePrev}>
                <i className="bi bi-chevron-left"></i>
            </button>
            <button className="buttonRight" onClick={handleNext}>
                <i className="bi bi-chevron-right"></i>
            </button>

            <div className="imageIndex flexRowSB">
                <p>{carouselIndex + 1}</p>
                <p>/</p>
                <p>{totalImages}</p>
            </div>
                </>
            )}
        </article>
    );
}
