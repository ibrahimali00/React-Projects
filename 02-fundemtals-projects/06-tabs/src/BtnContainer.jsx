import React from 'react';

const BtnContainer = ({ jobs, active, setActive }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, i) => {
        return (
          <button
            key={item.id}
            className={`job-btn ${i === active ? 'active-btn' : ''}`}
            onClick={() => setActive(i)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
