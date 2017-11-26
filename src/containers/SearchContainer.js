import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Search from 'ComponentPath/Search';
import { actionSearchProduct } from 'ActionsPath/index';

class SearchContainer extends Component {

    render () {

        let { onHandleChange } = this.props;

        return(
            <Search onHandleChange={onHandleChange}/>
        );
    }
}

SearchContainer.propTypes = {
    onHandleChange: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onHandleChange: (value) => {
            dispatch(actionSearchProduct(value));
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchContainer);