import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from './components/Cart';
import CheckOut from "./components/Checkout";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import MyProvider from './context/CartContext';



function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCKuqwMbo5TGf2yJQoyN8dqvjWizx1maIc",
    authDomain: "e-commerce-4c735.firebaseapp.com",
    projectId: "e-commerce-4c735",
    storageBucket: "e-commerce-4c735.appspot.com",
    messagingSenderId: "668073998230",
    appId: "1:668073998230:web:0ff0d4506e386b74440fb7"
  };
  
  initializeApp(firebaseConfig);
  
  return (
    <>
    <BrowserRouter>
    <MyProvider>
    <NavBar />
    <div className="App-body">
    <Routes>
     <Route path="/" element={<ItemListContainer/>}/>
     <Route path="/home" element={ <ItemListContainer /> } />
     <Route path="/category/:id" element={<ItemListContainer/>}/>
     <Route path="/item/:id" element={<ItemDetailContainer/>}/>
     <Route path="/cart" element={<Cart/>}/>
     <Route path="/checkout" element={<CheckOut/>}/>
    </Routes>
    </div>
    </MyProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
