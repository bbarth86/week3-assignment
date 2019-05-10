import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TotalPrice extends Component {
    render() {
        let listings = this.props.state.cart;
        let total = 0;
        for (var i=0; i < listings.length; i++ )
            total += listings[i].payment.cost;
        return (
          <div>
            <span className="total-desc">Total Price: </span><span className="total-val"> ${total}</span>
          </div>
        )
            
    }
}


TotalPrice.propTypes = {
  state: PropTypes.object,
};