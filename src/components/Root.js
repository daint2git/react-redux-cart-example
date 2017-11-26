import React, { Component } from 'react';

import Header from 'ComponentPath/Header';
import SearchContainer from 'ContainersPath/SearchContainer';
import ProductListContainer from 'ContainersPath/ProductListContainer';
import MessageContainer from 'ContainersPath/MessageContainer';
import CartListContainer from 'ContainersPath/CartListContainer';
import Footer from 'ComponentPath/Footer';

export default class Root extends Component {

    render () {
        return(
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <SearchContainer />
                        <ProductListContainer />
                        <MessageContainer />
                        <CartListContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}