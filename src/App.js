import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart';
import MyProvider from './context/CartContext';


function App() {
  
  return (
    <div className="App-body">
    <BrowserRouter>
    <MyProvider>
    <NavBar />
    <Routes>
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/home" element={ <ItemListContainer /> } />
     <Route path="/category/:id" element={<ItemListContainer/>}/>
     <Route path="/item/:id" element={<ItemDetailContainer/>}/>
     <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </MyProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
