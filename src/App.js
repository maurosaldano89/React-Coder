import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  const onAdd = (count) => {
    alert(`Se agregaron ${count} productos al carrito`)
    }
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      {/* <ItemListContainer greeting={"PC de escritorio"} />
      <ItemListContainer greeting={"Notebook"} />
      <ItemListContainer greeting={"Monitores"} />
  <ItemListContainer greeting={"Teleférico"} /> */}
      <ItemCount onAdd={onAdd} stock={7} inicial={1}/>
      </header>
    </div>
  );
}

export default App;
