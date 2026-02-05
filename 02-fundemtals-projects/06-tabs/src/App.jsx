import { useEffect, useState } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [active, setActive] = useState(0);

  // current items

  const fetchJobs = async function () {
    const res = await fetch(url);
    const data = await res.json();
    setjobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>;
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs} active={active} setActive={setActive} />
      <JobInfo jobs={jobs} active={active} />
    </section>
  );
};
export default App;
