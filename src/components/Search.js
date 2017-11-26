import React, { Component } from 'react';

export default class Search extends Component {
    render () {
        return(
            <section className="section">
                <div className="row">
                    <div className="form-group col-lg-10 col-md-6">
                        <label><h4><strong>Tìm kiếm:</strong></h4></label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nhập tên sản phẩm"
                            onChange={ (e) => this.handleChange(e) }
                        />                        
                    </div>                    
                </div>
            </section>
        );
    }

    handleChange = (event) => {
        this.props.onHandleChange(event.target.value);
    }
}