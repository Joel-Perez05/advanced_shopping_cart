import React from 'react'
import { CartState } from '../context/Context'
import SingleProducts from './SingleProducts'
import Filters from './Filters'
import "./styles.css"

const Home = () => {

  const {
    state: {products},
    productState: {sort, byStock, byFastDelivery, byRating, searchQuery}
  } = CartState()

  const transformProds = () => {
    let sortedProds = products;

    if(sort) {
      sortedProds = sortedProds.sort((a,b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProds = sortedProds.filter((prod) => prod.inStock)
    }

    if (byFastDelivery) {
      sortedProds = sortedProds.filter((prod) => prod.fastDelivery)
    }

    if (byRating) {
      sortedProds = sortedProds.filter((prod) => prod.ratings >= byRating)
    }

    if (searchQuery) {
      sortedProds = sortedProds.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      )
    }

    return sortedProds
  }

  return (
    <div className='home'>
      <Filters />
      <div className='prodContainer'>
        {
          transformProds().map((prod) => {
            return <SingleProducts key={prod.id} prod={prod}/>
          })
        }
      </div>
    </div>
  )
}

export default Home