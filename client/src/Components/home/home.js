import React from 'react';
import './home.css'
import manEating from '../../assessts/pizza1.png'
import illustration1 from '../../assessts/deliver1.jpg'
import illustration2 from '../../assessts/delivery2.jpg'
import illustration3 from '../../assessts/delivery3.jpg'

const Home = () => {
  return (
    <section>
    <section style={{height:'90vh'}} id="home" className="container">
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
    <section >
      <div className='container'>
      <div className="wrapper">
        <div className="delivery">
          <div className='titles'>
            <span className='deliverysubtitle'>Delivery</span>
            <h2 className='deliveriTitle'>Always on time for you</h2>
          </div>
          <div className='deliveryInfo'>
            <div className='deliveryInfo'>
              <img src={illustration1} alt='' className='firstImg'/>
              <h3>Our delivery guy is always on time</h3>
            </div>
            <div className='deliveryInfo'>
              <img src={illustration2} alt='' className='secondImg'/>
              <h3>He works very hard</h3>
            </div>
            <div className='deliveryInfo'>
              <img src={illustration3} alt='' className='thirdImg'/>
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </section>
  )

}
export default Home