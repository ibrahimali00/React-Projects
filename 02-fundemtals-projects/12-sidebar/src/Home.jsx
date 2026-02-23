import { useGolbalContext } from './Context';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';

function Home() {
  const { openSideBar, openModal } = useGolbalContext();

  return (
    <main>
      <button onClick={openSideBar} className="sidebar-toggle">
        {' '}
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show Modal
      </button>
    </main>
  );
}

export default Home;
