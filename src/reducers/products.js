import { getProducts, getAllProducts } from '../services/product/products'


export const initializer = () => {}
export const actions = {
  START: 'START_REQUEST',
  FINISH: 'FINISH_REQUEST',
  ERROR: 'ERROR_REQUEST',
  UPDATE_OPEN_STATE: 'UPDATE_OPEN_STATE',
}

export const productsThunk = (dispatch, filter) => {
  dispatch({ type: actions.START })

  function handleSuccessfully(response) {

    dispatch({
      type: actions.FINISH,response,
    })
  }

  function handlesError(errorResponse) {
    const { message } = errorResponse
    dispatch({ type: actions.ERROR, message })
  }
  return getProducts(filter)
    .then(handleSuccessfully)
    .catch(handlesError)
}

export const allProductsThunk = (dispatch) => {
  dispatch({ type: actions.START })

  function handleSuccessfully(response) {

    dispatch({
      type: actions.FINISH,response,
    })
  }

  function handlesError(errorResponse) {
    const { message } = errorResponse
    dispatch({ type: actions.ERROR, message })
  }
  return getAllProducts()
    .then(handleSuccessfully)
    .catch(handlesError)
}


const INITIAL_STATE = {
  isLoading: false,
  products: {},
  errorMessage: '',
}

export default (state = INITIAL_STATE, action = {}) => {

  switch (action.type) {
    case actions.START:
      return {
        ...state,
        isLoading: true,
      }
    case actions.FINISH:
      return {
        isLoading: false,
        products: action.response,
        errorMessage: null,
      }
    case actions.ERROR:
      return {
        ...INITIAL_STATE,
        isLoading: false,
        errorMessage: action.message,
      }
    default:
      return state
  }
}

export const products = state => state.products
export const errorMessage = state => state.errorMessage
export const isLoading = state => state.isLoading