import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from '../actions/pizzaActions'
import Pizza from '../Menu/pizza';
import './menu.css';

export default function Menu() {
  const dispatch = useDispatch()

  const pizzasstate = useSelector(state => state.getAllPizzasReducer)
  const { pizzas, error, loading } = pizzasstate
  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])


  return (
    <div>
      <div className='row justify-content-center'>

        {loading ? (
        <h1 className='title2 m-4'>Loading....</h1>
        ) : error ? (
        <h1 className='title2 m-3 '>Something went wrong</h1>
        ) : (
        pizzas.map(pizza => {
          return (
          <div className='col-md-3 m-3' key={pizza._id}>
            <div >
              <Pizza pizza={pizza} />
            </div>
          </div>
          );
          })
        )}
      </div>
    </div>
  )
}