import React, { useEffect } from 'react';
import { useState } from 'react';
import { list, shortList, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [activePerson, setActivePerson] = useState(0);

  const prevSlide = () => {
    setActivePerson((oldIdx) => {
      const result = (oldIdx - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setActivePerson((oldIdx) => {
      const result = (oldIdx + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => {
      clearInterval(id);
    };
  }, [activePerson]);

  return (
    <section className="slider-container">
      <button className="prev" type="button" onClick={prevSlide}>
        <FiChevronLeft />
      </button>

      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - activePerson)}%)`,
              opacity: activePerson === personIndex ? 1 : 0,
              visibility: activePerson === personIndex ? 'visible' : 0,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button className="next" type="button" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
