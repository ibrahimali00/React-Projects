import { useRef } from 'react';
import { useGlobalContext } from './context';
import sublinks from './data';

const Submenus = () => {
  const { pageId, setPagId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const subMenuContainer = useRef(null);

  const handleMousLeave = (e) => {
    const submenu = subMenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left - 1 || clientX > right + 1 || clientY > bottom - 1) {
      setPagId(null);
    }
  };

  return (
    <div
      className={`submenu ${pageId ? 'show-submenu' : ''}`}
      onMouseLeave={handleMousLeave}
      ref={subMenuContainer}
    >
      <h5>{currentPage?.page}</h5>

      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, icon, label } = link;
          return (
            <a key={id} href={url}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenus;
