import React from 'react';
import menu from '../Menu/menu.json';
import Pizza from '../Menu/pizza';
import './menu.css';

export default function Menu(){
  return(
      <div>
          <div className='row'>
            {menu.map(pizza=>{
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