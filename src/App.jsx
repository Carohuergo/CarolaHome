

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainter"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart/Cart';
import { CheckOut } from './components/CheckOut/CheckOut';





function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>  
          <Route path='/' element={<ItemListContainer greeting={"Encontra todo lo que necesitas para hacer de tu casa un HOGAR"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:category' element={<ItemListContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<CheckOut/>}/>
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
