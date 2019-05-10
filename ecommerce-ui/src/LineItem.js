import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LineItem extends Component {
    render() {
        const selectedListings = this.props.state.cart.map((listing, idx) => {
            return (
                <div key={idx}>
                    <div className="cart-line-item">
                        <p className="cart-title">{listing.title}</p>
                        <p className="cart-cost">${listing.payment.cost}</p>
                        <button className="rfc-btn" onClick={() => this.props.removeFromCart(idx)}>Remove</button>
                    </div>
                </div>
            )});
        return (
            <div>
                {selectedListings}
            </div>
        )
    }
}

LineItem.propTypes = {
    state: PropTypes.object,
    removeFromCart: PropTypes.func
  };