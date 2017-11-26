import React, { Component } from 'react';

import * as ConstantMessage from 'ConstantsPath/Message';
import { showPrice, showSubTotal } from 'CommonPath/common';

export default class Cart extends Component {

    render () {

        let { cart } = this.props;

        return(
            <tr>
                <th scope="row">
                    <img
                        src={cart.product.image}
                        alt={cart.product.name}
                        className="img-fluid z-depth-0"
                    />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{showPrice(cart.product.price)}VND</td>
                <td className="center-on-small-only">
                    <span className="qty">{cart.quantity}</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            onClick={ () => this.onUpdateQuantity(cart.product, cart.quantity - 1) }
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>—</a>
                        </label>
                        <label
                            onClick={ () => this.onUpdateQuantity(cart.product, cart.quantity + 1) }
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{showPrice(showSubTotal(cart.product.price, cart.quantity))}VND</td>
                <td>
                    <button type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove product"
                        data-original-title="Remove product"
                        onClick={ () => this.onDeleteProductInCart(cart.product) }
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteProductInCart = (product) => {

        let { onDeleteProductInCart, onChangeMessage } = this.props;
        onDeleteProductInCart(product);
        onChangeMessage(ConstantMessage.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (product, quantity) => {

        if (quantity > 0) {
            let { onUpdateProductInCart, onChangeMessage } = this.props;
            onUpdateProductInCart(product, quantity);
            onChangeMessage(ConstantMessage.MSG_UPDATE_TO_CART_SUCCESS);
        } 
    }
}