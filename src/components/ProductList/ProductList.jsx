import React from 'react'
import "./productList.css"
import Product from "../product/Product"

export const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">create & Inspire</h1>
                <p className="pl-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium saepe earum ullam sequi, quidem id iste voluptatum eveniet exercitationem, quo et, expedita quisquam.</p>
            </div>
            <div className="pl-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

        </div>
    )
}
