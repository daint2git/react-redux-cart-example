import * as Types from 'ConstantsPath/ActionType';

var initialState = [
  {
    id: 1,
    name: 'Iphone X',
    image: "./img/products/IphoneX.jpg",
    description: 'Sản phẩm do Apple sản xuất.',
    price: 29990000,
    inventory: 10,
    rating: 5
  },
  {
    id: 2,
    name: 'Iphone 5s',
    image: "./img/products/Iphone5s.jpg",
    description: 'Sản phẩm do Apple sản xuất.',
    price: 5490000,
    inventory: 10,
    rating: 3
  },
  {
    id: 3,
    name: 'Samsung Galaxy Note 8',
    image: "./img/products/Note8.jpg",
    description: 'Sản phẩm do Samsung sản xuất.',
    price: 22490000,
    inventory: 10,
    rating: 4
  },
  // {
  //     id : 4,
  //     name : 'Samsung Galaxy S8 Plus',
  //     image : "./img/products/s8plus.jpg",
  //     description : 'Sản phẩm do Samsung sản xuất.',
  //     price : 20490000,
  //     inventory : 10,
  //     rating : 4
  // }             
];

const productList = (state = initialState, action) => {

  let { value } = action;

  switch (action.type) {
    case Types.SEARCH_PRODUCT:

      if (value.length > 0) {
        state = filterProduct(initialState, value);
      } else {
        state = initialState;
      }
      return [...state];

    default:
      return [...state]
  }
}

var filterProduct = (productList, filterValue) => {
  let result = productList.filter((product) => {
    return (product.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1);
  });
  return result;
}

export default productList;