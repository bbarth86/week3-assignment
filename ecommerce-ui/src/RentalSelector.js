import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class RentalSelector extends Component {
    render() {
        const availableListings = this.props.listings.map((listing, idx) => {
            return (
                <div key={idx} className="listing-each">
                    <div>
                        <img className="listing-image" alt="view of listing" src={listing.image} />
                    </div>
                    <div className="listing-details">
                        <p className="listing-title">{listing.title}</p>
                        <p className="listing-type">{listing.houseType} - {listing.location.city}, {listing.location.country}</p>
                        <span className="listing-cost">${listing.payment.cost}</span>
                        <span className="listing-desc">{listing.payment.description}</span>
                        <div  className="listing-atc">
                            <button className="atc-btn" onClick={() => this.props.addToCart(idx)}>
                            Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            )});
        return (
            <div>
                {availableListings}
            </div>
        )
    }
}

RentalSelector.propTypes = {
    listings: PropTypes.array,
    addToCart: PropTypes.func
  };