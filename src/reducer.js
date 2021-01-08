import { combineReducers } from 'redux';
import common from './reducers/common';
import home from './reducers/home';
import products from './reducers/products'
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  products,
  common,
  home,
  router: routerReducer
});
