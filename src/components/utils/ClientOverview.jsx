import '../../styles/clientoverview.css';
import PopUpImage from './PopUpImage';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import review1 from '../../assets/img/carlos-recommendation.png';
import review2 from '../../assets/upwork/review1.png';
import review3 from '../../assets/upwork/review2.png';
import review4 from '../../assets/upwork/review3.png';
import review5 from '../../assets/upwork/review4.png';
import review6 from '../../assets/upwork/review5.png';
import review7 from '../../assets/upwork/review6.png';
import review8 from '../../assets/upwork/review7.png';

const images = [review1, review7, review8, review2, review3, review4, review5, review6];

import useImageSlider from '../../scripts/useImageSlider';

export default function ClientOverview() {
    const { currentIndex, setCurrentIndex } = useImageSlider(images, 5000);
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className="home-overview">
                <h2 className="home-overview-title">What People Say About My Work?</h2>
                <div className="home-overview-slider-wrapper">
                    <button
                        className="home-overview-arrow left"

                        onClick={() =>
                            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
                        }
                    >
                        <i class="fa-solid fa-chevron-left"></i>

                    </button>
                    <div className="home-overview-slider">
                        {
                            images.map((img, index) => (
                                <img
                                    key={index}
                                    className={`home-overview-img ${index === currentIndex ? 'visible' : 'hidden'}`}
                                    src={img.src}
                                    alt={`review-${index}`}
                                    onClick={() => setSelectedImage(img)} // <-- open popup
                                />
                            ))
                        }
                    </div>
                    <button
                        className="home-overview-arrow right"
                        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                    >
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div className="home-overview-dots">
                    {images.map((_, index) => (
                        <span
                            key={index}
                            className={`home-overview-dot ${index === currentIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
            {
                selectedImage &&
                typeof document !== 'undefined' &&
                ReactDOM.createPortal(
                    <div
                        className="project-overlay"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="project-popup">
                            <PopUpImage
                                image={<img src={selectedImage.src} alt="zoomed" />}
                                onClose={() => setSelectedImage(null)}
                            />
                        </div>
                    </div>,
                    document.body
                )
            }
        </div>
    );
}
