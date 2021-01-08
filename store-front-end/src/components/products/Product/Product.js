import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'
const Product = props =>{
    const { product } = props
    const {brand, description, image, price, discount,id } = product
    return (
    <div className="product-container">
        <div>{id}</div>
        <img src={image}  width="106px" height="122px" alt="producto"/>
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
