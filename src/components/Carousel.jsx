import Thumbnails from './Thumbnails'
import './Carousel.css'
import React, { useState } from 'react';

const Carousel = () => {
    const images = [
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
    ];

    const [current, setCurrent] = useState(0);

    const handleThumbnailClick = (index) => {
      setCurrent(index);
    };
  
    const handleMainImageClick = () => {
      const nextIndex = (current + 1) % images.length;
      setCurrent(nextIndex);
    };
  
    return (
      <div className='carousel'>
        <div className='main-image-container'>
          <img
            src={images[current]}
            alt={` ${current}`}
            onClick={handleMainImageClick}
          />
        </div>
        <Thumbnails images={images} current={current} onChange={handleThumbnailClick} />
      </div>
    );
}

export default Carousel