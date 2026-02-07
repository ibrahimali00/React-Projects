import { useState } from 'react';
import { nanoid } from 'nanoid';

import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = function (e) {
    e.preventDefault();
    setText(data.slice(0, parseInt(count)));
  };

  return (
    <section className="section-center">
      <h4>Tired of Lorem Ipsum ?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          min={1}
          step={1}
          max={8}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid}>{item}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
