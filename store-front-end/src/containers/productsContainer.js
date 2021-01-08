import { connect } from 'react-redux'
import * as productsModule from '../reducers/products.js'
import Products from '../components/products/Products'

export const actions = {
  START: 'START_REQUEST',
  FINISH: 'FINISH_REQUEST',
  ERROR: 'ERROR_REQUEST',
  UPDATE_OPEN_STATE: 'UPDATE_OPEN_STATE',
}

const mapStateToProps = state => ({
  productsResponse:productsModule.products(state),
})

const mapDispatchToProps = dispatch => ({
  onMount:()=>{productsModule.allProductsThunk(dispatch)},
  onSearch: (filter) => {
    productsModule.productsThunk(dispatch,filter)
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(Products)