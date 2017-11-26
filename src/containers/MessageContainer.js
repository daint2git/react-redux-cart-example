import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Message from 'ComponentPath/Message';
import { actionAddToCart } from 'ActionsPath/index';

class MessageContainer extends Component {

    render () {

        let { message } = this.props;

        return(
            <Message message={message}/>
        );
    }  

}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);