import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/home/home';
import Hero from './Components/hero/hero';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='/hero' element={<Hero/>}/> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
