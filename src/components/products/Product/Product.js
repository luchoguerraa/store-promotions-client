import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'
const Product = props =>{
    const { product } = props
    const {brand, description, price, discount,id } = product
    return (
    <div className="product-container">
        <div>{id}</div>
        <div>{brand}</div>
        <div>{description}</div>
        <div>{price} {discount? '(50%)':'PN'}</div>
        <div><button>agregar al carro</button></div>
    </div>)
}

Product.propTypes = {
    product: PropTypes.object,
}

export default Product
