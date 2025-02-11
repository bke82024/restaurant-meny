import "../styles/App.css";
import MenuLayout from "./components/MenuLayout.jsx";
import menu from "./data/menu.jsx";
function App() {
  return (
    <>
      <MenuLayout menu={menu} />
    </>
  );
}

export default App;
