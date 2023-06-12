import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/home/home';
import Menu from './Components/Menu/menu';
import Login from './Components/Login/login';
import Cart from './Components/Cart/cart';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
