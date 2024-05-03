import React from 'react'
import './Women.css'
import data_product  from '../Components/Assets/data'
import Items from '../Items/Items'
const Women =() => {
    return (
        <div className='popular'>
            <h1> POPULAR IN WOMEN </h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.item_price} />
                })}
            </div>
          

        </div>
    )
}
export default Women