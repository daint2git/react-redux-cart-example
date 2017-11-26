import { combineReducers } from 'redux';

import productList from 'ReducersPath/productList';
import cartList from 'ReducersPath/cartList';
import message from 'ReducersPath/message';

const appReducers = combineReducers({
    productList,
    cartList,
    message
});

export default appReducers;