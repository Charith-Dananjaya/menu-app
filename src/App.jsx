import { useState } from 'react';
import menu from './data';
import Menu from './Menu';
import Title from './Title';
import Categories from './Categories';

let tempCategories = menu.map((item) => {
  return item.category;
});

// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const allCatergories = [
  'all',
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  const [categories, setCategories] = useState(allCatergories);

  const fillterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <main>
      <div className="section">
        <Title text="Our Menu" />
        <Categories
          categories={categories}
          fillterItems={fillterItems}
        ></Categories>
        <Menu items={menuItems} />
      </div>
    </main>
  );
};
export default App;
