import { useEffect, useState } from 'react';
import Loader from './Loader';
import Tours from './Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function handleRemoveTour(id) {
    setTours((tours) => tours.filter((tour) => tour.id !== id));
  }

  const fetchTours = async function () {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setTours(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>

          <button
            className="btn"
            style={{ marginTop: '2rem' }}
            type="button"
            onClick={fetchTours}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} handleRemoveTour={handleRemoveTour} />
    </main>
  );
};
export default App;
