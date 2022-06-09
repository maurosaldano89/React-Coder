import "./App.css";
import NavBar from "./components/Navbar";
import ItemCount from "./components/ItemCount";
import Item from "./components/Item";

function App() {
  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`)
    }
  return (
    <div className="App">
      <NavBar />
      <div className="App-body">
      <ItemCount onAdd={onAdd} stock={7} inicial={1}/>
      <Item/>
      <Item/>
      </div>
    </div>
  );
}

export default App;
