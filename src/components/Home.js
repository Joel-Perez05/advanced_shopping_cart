import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts'
import Filters from './Filters'
import "./styles.css"

const Home = () => {

  const {state: {products}} = CartState()

  console.log(products)

  return (
    <div className='home'>
      <Filters />
      <div className='prodContainer'>
        {
          products.map((prod) => {
            return <SingleProducts key={prod.id} prod={prod}/>
          })
        }
      </div>
    </div>
  )
}

export default Home