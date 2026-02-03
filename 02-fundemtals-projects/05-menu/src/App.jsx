import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categoires from './Categoires';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categorries, setCategorries] = useState(allCategories);
  const filterItems = function (cat) {
    if (cat === 'all') {
      setMenuItems(menu);
    } else {
      const filteredMenu = menu.filter((el) => el.category === cat);
      setMenuItems(filteredMenu);
    }
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categoires categorries={categorries} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
