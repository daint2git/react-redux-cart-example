import React, { Component } from 'react';

export default class ProductList extends Component {

    render () {

        let { children } = this.props;

        return(
            <section className="section">
                <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                <div className="row">
                    {children}
                </div>
            </section>
        );
    }
}