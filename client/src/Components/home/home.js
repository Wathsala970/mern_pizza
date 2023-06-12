import React from 'react';
import './home.css'
import manEating from '../../assessts/pizza1.png'

const Home = () => {
  return (
    <section id="home" className="container">
      <div className="wrapper">
        <div className="left">
          <h2 className="tittle">Do you crave delicious food</h2>
          <p className="firstmsg">But going out to take <span> food costs time....</span></p>
          <p className="secondmsg">Why not order<span> pizza</span> or something <br /><span>delicious</span>from our restaurant</p>
          <p className="desc">Our restaurant always puts the client above.
            They are our single most important thing for our business.</p>
          <div className='btn'>
            <button className='button'>Order Now!</button>
          </div>

        </div>
        <div className="right">
          <img src={manEating} alt="" className="manEating"></img>
        </div>
      </div>
    </section>
  )

}
export default Home