import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const handleNext = function () {
    setIndex((cur) => checkNumber(cur + 1));
  };
  const handlePrev = function () {
    setIndex((cur) => checkNumber(cur - 1));
  };

  const handleRandom = () => {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (randomPerson === index) {
      randomPerson = index + 1;
    }
    setIndex(checkNumber(randomPerson));
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <h4 className="job">{job}</h4>
        <h4 className="info">{text}</h4>

        <div className="btn-container">
          <button className="prev-btn" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={handleRandom}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
