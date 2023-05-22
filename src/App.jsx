

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainter"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';




function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a Carola's Home"} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:category' element={<ItemListContainer />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
