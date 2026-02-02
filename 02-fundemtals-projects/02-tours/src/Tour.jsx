import React, { useState } from 'react';

const Tour = ({ id, info, image, name, price, handleRemoveTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} className="img" alt={name} />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h4>{name}</h4>
        <p>
          {readMore ? info : `${info.substring(0, 200)}$... `}
          <button
            className="info-btn"
            type="button"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'read less' : 'read More'}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block btn-delete"
          onClick={() => handleRemoveTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
