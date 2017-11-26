import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartList from 'ComponentPath/CartList';
import Cart from 'ComponentPath/Cart';
import CartResult from 'ComponentPath/CartResult';
import * as ConstantMessage from 'ConstantsPath/Message';
import { actionDeleteProductInCart, actionUpdateProductInCart, actionChangeMessage } from 'ActionsPath/index';

class CartListContainer extends Component {

    render () {

        let { cartList } = this.props;

        return(
            <CartList>
                {this.showCarts(cartList)}
                {this.showTotalAmount(cartList)}
            </CartList>
        );
    }   

    showCarts = (carts) => {
        let result = <tr>
                        <td>{ConstantMessage.MSG_CART_EMPTY}</td>
                    </tr>;
        let { onDeleteProductInCart,onUpdateProductInCart , onChangeMessage } = this.props;
        if (carts.length > 0) {
            result = carts.map((cart, index) => {
                return <Cart 
                            key={index}
                            cart={cart}
                            onDeleteProductInCart={onDeleteProductInCart}
                            onUpdateProductInCart={onUpdateProductInCart}
                            onChangeMessage={onChangeMessage}
                        />
            });
        }

        return result;        
    }
    
    showTotalAmount = (carts) => {
        let result = null;
        let totalAmount = 0;

        if (carts.length > 0) {

            for (let i = 0; i < carts.length; i++) {
                totalAmount += carts[i].product.price * carts[i].quantity;
            }

            result = <CartResult totalAmount={totalAmount}/>
        }

        return result;
    }
}

CartListContainer.propTypes = {
    cartList: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired
            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cartList: state.cartList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actionDeleteProductInCart(product));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actionUpdateProductInCart(product, quantity));
        },
        onChangeMessage: (message) => {
            dispatch(actionChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartListContainer);