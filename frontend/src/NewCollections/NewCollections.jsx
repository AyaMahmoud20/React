import React from 'react'
import './NewCollections.css'
import new_collectin from '../Components/Assets/new_collections'
import Items from '../Items/Items'

const NewCollections =() => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collectin.map((item,i)=>{
                 return <Items key={i} id={item.id} name={item.name} image={item.image} price={item.item_price} />                })}

            </div>

        </div>
    )
}
export default NewCollections