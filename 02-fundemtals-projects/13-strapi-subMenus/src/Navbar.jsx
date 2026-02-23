import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, setPagId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPagId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>

        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
