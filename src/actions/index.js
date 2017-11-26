import * as Types from 'ConstantsPath/ActionType';

export const actionSearchProduct = (value) => {
  return {
    type: Types.SEARCH_PRODUCT,
    value
  }
}

export const actionAddToCart = (product, quantity) => {
  return {
    type: Types.ADD_TO_CART,
    product,
    quantity
  }
}

export const actionDeleteProductInCart = (product) => {
  return {
    type: Types.DELETE_PRODUCT_IN_CART,
    product
  }
}

export const actionUpdateProductInCart = (product, quantity) => {
  return {
    type: Types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  }
}

export const actionChangeMessage = (message) => {
  return {
    type: Types.CHANGE_MESSAGE,
    message
  }
}