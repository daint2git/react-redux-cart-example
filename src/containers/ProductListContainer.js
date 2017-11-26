import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductList from 'ComponentPath/ProductList';
import Product from 'ComponentPath/Product';
import { actionAddToCart, actionChangeMessage } from 'ActionsPath/index'

class ProductListContainer extends Component {

    render () {

        let { productList } = this.props;

        return(
            <ProductList>
                {this.showProducts(productList)}
            </ProductList>
        );
    }

    showProducts = (products) => {
        let result = null;
        let { onAddToCart, onChangeMessage } = this.props;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }

        return result;
    }

}

ProductListContainer.propTypes = {
    productList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired            
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        productList: state.productList
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actionAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actionChangeMessage(message));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);