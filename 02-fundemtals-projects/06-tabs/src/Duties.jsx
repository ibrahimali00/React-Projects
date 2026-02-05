import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const Duties = (duties) => {
  const data = duties.duties;

  return (
    <div>
      {data.map((duty, i) => {
        return (
          <div key={i} className="job-desc">
            <FaAngleDoubleRight className="btn-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
