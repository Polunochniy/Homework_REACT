import React from 'react';

const Thumbnails = ({ images, current, onChange }) => {
    return (
      <div className='thumbnails'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === current ? 'active' : ''}`}
          >
            <img
              src={image}
              alt={` ${index}`}
              onClick={() => onChange(index)}
            />
          </div>
        ))}
      </div>
    );
}

export default Thumbnails;