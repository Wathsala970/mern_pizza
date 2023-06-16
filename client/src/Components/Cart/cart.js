import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function CartScreen() {
  const cartstate = useSelector(state => state.CartReducer)
  const cartItems = cartstate.cartItems
  return (
    <div>
      <div className='row'>
        <div className='col-md-6'>
          <h3 style={{ fontSize: '40px' }} >My Cart</h3>
          {cartItems.map(item => {

            return <div className='flex-container'>

              <div className='text-left m-1 w-100'>
                <h5>{item.name}[{item.varient}]</h5>
                <h5>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h5>
                <h5 style={{ display: 'inline' }}>Quantity : </h5>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <b className='quantity'>{item.quantity}</b>
                <i className="fa fa-minus" aria-hidden="true"></i>
                <hr />
              </div>

              <div className='m-1 w-100'>
                <img src={item.image} style={{ height: '100px', width: '100px' }}></img>
              </div>
              <div className='m-1 w-100'>
                <i className="fa fa-trash" aria-hidden="true"></i>
              </div>

            </div>
          })}

        </div>
      </div>
    </div>
  )
}