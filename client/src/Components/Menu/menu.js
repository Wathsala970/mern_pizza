import React from 'react';
import pizzas from '../Menu/pizzasdata'
import Pizza from '../Menu/pizza';
import './menu.css';

export default function Menu(){
  return(
      <div>
          <div className='row'>
            {pizzas.map(pizza=>{
              return <div className='col-md-4'>
                <div>
                  <Pizza pizza={pizza}/>
                </div>
              </div>
            })}
          </div>
      </div>
  )
}