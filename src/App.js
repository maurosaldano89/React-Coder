import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  
  return (
    <BrowserRouter>
    <NavBar />
    {/* <div className="App">
      <div className="App-body">
      <ItemListContainer/>
      </div>
    </div> */}
    <Routes>
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/category/:id" element={<ItemListContainer/>}/>
     <Route path="/item/:id" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
