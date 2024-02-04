import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';
import Wishies from './Routes/Wishies/Wishies';
import Cart from './Routes/Cart/Cart';
import { PRODUCTS } from './static';
import SingleRoute from './Routes/SingleRoute/SingleRoute';

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wishes' element={<Wishies />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<SingleRoute data={PRODUCTS} />} />
      </Routes>
    </div>
  );
}

export default App;
