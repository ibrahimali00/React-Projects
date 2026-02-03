import React from 'react';

const Categoires = ({ categorries, filterItems }) => {
  return (
    <div className="btn-container">
      {categorries.map((cat) => {
        return (
          <button
            className="btn"
            type="button"
            key={cat}
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};

export default Categoires;
