import React, { Component } from 'react';
import TotalPrice from './TotalPrice.js';
import LineItem from './LineItem.js';
import PropTypes from 'prop-types';

export default class ShoppingCart extends Component {
    render() {
        return (
            <div className="cart-wrapper">
                <div className="cart-order">
                <LineItem state={this.props.state} removeFromCart={this.props.removeFromCart} />
                </div>
                <div className="cart-total-price">
                <TotalPrice state={this.props.state} />
                </div>
            </div>
        )
    }
}

ShoppingCart.propTypes = {
    state: PropTypes.object,
    removeFromCart: PropTypes.func
  };