import * as Types from 'ConstantsPath/ActionType';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];
// var initialState = [
//     {
//         product : {
//             id : 1,
//             name : 'Iphone 7+',
//             image : './img/products/Iphone7plus.jpg',
//             description : 'Sản phẩm do apple sản xuất',
//             price : 500,
//             inventory : 10,
//             rating : 4
//         },
//         quantity : 5
//     }
// ];

const cartList = (state = initialState, action) => {

    let { product, quantity } = action;
    let index = -1;

    switch(action.type) {

        // add product to cart
        case Types.ADD_TO_CART:

            index = findProductInCart(state, product);
            if (index === -1) {
                state.push({
                    product : product,
                    quantity : quantity
                });              
            } else {
                state[index].quantity += quantity;
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        // delete product in cart
        case Types.DELETE_PRODUCT_IN_CART:  

            index = findProductInCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        // update product in cart
        case Types.UPDATE_PRODUCT_IN_CART:  

            index = findProductInCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }

            localStorage.setItem('CART', JSON.stringify(state));
            return [...state];

        default : return [...state]   
    }
}

var findProductInCart = (cart, product) => {
    let index = -1;

    if (cart.length > 0) {
        for (let i = 0, length = cart.length; i < length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }

    return index;
}

export default cartList;