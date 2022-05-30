import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header container-fluid">
      <ItemListContainer greeting={"PC de escritorio"} />
      <ItemListContainer greeting={"Notebook"} />
      <ItemListContainer greeting={"Monitores"} />
      <ItemListContainer greeting={"Teleférico"} />
      </header>
    </div>
  );
}

export default App;
