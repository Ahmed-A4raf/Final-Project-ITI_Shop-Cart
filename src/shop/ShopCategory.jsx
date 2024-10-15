import React from 'react'
import Data from '../products.json'
const ShopCategory = ({filterItems,setItem,menuItems,setproducts,selectedCategory}) => {
  return (
    <>
        <div className='widget widget-header'>
            <h5 className='ms-2'>All Categories</h5>
        </div>
        <div>
            <button onClick={() => setproducts(Data)} className={`m-2 ${selectedCategory === "All" ? 'bg-warning' : ''}`} >All</button>
            {
                menuItems.map((val, id) => {
                    return (
                        <button key={id} onClick={() => filterItems(val)} className={`m-2 ${selectedCategory === val ? 'bg-warning' : ''}`}>{val}</button>
                    )
                })
                    
                
            }
        </div>
    </>
  )
}

export default ShopCategory