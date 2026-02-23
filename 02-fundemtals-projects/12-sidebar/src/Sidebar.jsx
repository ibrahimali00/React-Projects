import logo from './logo.svg';
import { social, links } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGolbalContext } from './Context';

function Sidebar() {
  const { isSideBarOpen, closeSideBar } = useGolbalContext();
  return (
    <aside className={`sidebar ${isSideBarOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="coding addict logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {social.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon} {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
