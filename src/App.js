import "./App.css";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart';
import MyProvider from './context/CartContext';
import { initializeApp } from "firebase/app";



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
