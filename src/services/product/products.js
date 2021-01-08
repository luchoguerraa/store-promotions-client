import {
    axiosInstance,
    INTERNAL_SERVER_ERROR,
  } from '..'

  const BAD_GATEWAY = 502
  const PRODUCTS_URI = 'api/v1/private/store/products'
  const ALL_PRODUCTS_URI = 'api/v1/private/store/products/'

  const handlesSuccessfulResponse = response => {
    return response.data
  }

  const handlesError = error => {
    if (itHasAResponse(error)) {
      if (error.response.status === BAD_GATEWAY) {
            return Promise.reject(BAD_GATEWAY)
          }
    }
    return Promise.reject(INTERNAL_SERVER_ERROR)
  }
  
  const itHasAResponse = error => {
    return error.response !== undefined
  }
  
  export const getProducts = (filter) => {
    return axiosInstance
      .get(`${PRODUCTS_URI}?filter=${filter}`)
      .then(response => handlesSuccessfulResponse(response))
      .catch(error => handlesError(error))
  }

  export const getAllProducts = () => {
    return axiosInstance
      .get(ALL_PRODUCTS_URI)
      .then(response => handlesSuccessfulResponse(response))
      .catch(error => handlesError(error))
  }
  
  
  
  
  

  

  

  
  

  

  