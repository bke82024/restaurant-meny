import DishCard from "./Dishcard.jsx";
const MenuLayout = ({ menu }) => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((obj) => (
          <DishCard {...obj} />
        ))}
      </ul>
    </div>
  );
};

export default MenuLayout;
