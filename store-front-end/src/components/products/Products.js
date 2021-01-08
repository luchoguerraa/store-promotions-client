import React,{ useEffect }  from 'react'
import PropTypes from 'prop-types'
import SeachProduct from './SearchProducts/SearchProducts'
import Product from './Product/Product'
import Loader from '../Loader/Loader'
import './products.css'

const Products = props =>{
  const { productsResponse, onSearch,onMount } = props
  const {isLoading, products} = productsResponse

  useEffect(() => {
    onMount()
  }, [onMount])

  const  handleSearchProduc = (filter) =>{
   filter ===''?onMount():onSearch(filter)
  }
  const renderListProducts = products => (
    <div>
      <div>
        <SeachProduct onSearch={handleSearchProduc}/>
      </div>
      {isLoading?<Loader/>:!isLoading && products.length
        ? <div className="products-container">  {products.map(product => {
          return renderProduct(product);
        })}</div>
      : renderNotFound()}
    </div>
  )


  const renderProduct = (product) => {
    return (
    <Product product={product}/>
    )
  }

  const renderNotFound = () => (
    <div className='not-found-item'>
      <p>Sin coincidencias</p>
    </div>
  )

  return (
  <div>{renderListProducts(products)}</div>
  )
}

Products.propTypes = {
    productsResponse: PropTypes.object,
    onSearch: PropTypes.func,
    onMount: PropTypes.func,
}
export default Products
