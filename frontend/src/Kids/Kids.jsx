import React from 'react'
import './Kids.css'
import data_product  from '../Components/Assets/data_kids'
import Items from '../Items/Items'
const Kids =() => {
    return (
        <div className='popular'>
            <h1> POPULAR IN KIDS</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.item_price} />
                })}
            </div>
          

        </div>
    )
}
export default Kids