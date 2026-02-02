import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, handleRemoveTour }) => {
  return (
    <section>
      <div>
        <h2 className="title">Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          console.log(tour);
          return (
            <Tour key={tour.id} {...tour} handleRemoveTour={handleRemoveTour} />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
