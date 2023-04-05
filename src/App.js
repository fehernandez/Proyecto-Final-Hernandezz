import './App.css';
import NavBar from "./components/Structure/NavBar/navbar.js"
import "./components/reset.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Promo from './components/Promo/promo.js';
import Footer from './components/Structure/Footer/footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { CartProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          {/* Segunda pre entrega */}
          {/* Inicio */}

          <Route path="/" element={<Promo />} />

          {/* Catalogo */}
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route path="/catalogo/:categoryId" element={<ItemListContainer />} />
          <Route path="/producto/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />

          {/* Segunda pre entrega */}

          <Route path="/inicio" element={<Promo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>


  );
}

export default App;