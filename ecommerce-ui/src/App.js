import React, { Component } from 'react';
import RentalSelector from './RentalSelector.js';
import ShoppingCart from './ShoppingCart.js';
import './App.css';
import './RentalSelector.css';
import './ShoppingCart.css';
import Airbnbs from './airbnbs.json';

export default class App extends Component {
  state = {
    cart: [],
    listings: Airbnbs
  }; 



  addToCart = (key) => {
    const selectedListing = this.state.listings[key];
    if (this.state.cart.includes(selectedListing)) {
      alert('Already added to cart.');
      return;
    }
    this.setState(prevState => {
      return {
        cart: [...prevState.cart, selectedListing]
      };
    });
  }

  removeFromCart = (key) => {
    this.setState(prevState => {
      const cart = [...prevState.cart];
      cart.splice(key,1);
      return {
        cart
      };
    });
  };
  
  render() {
    return (
      <div>
        <div className="shopping-cart">
          <ShoppingCart removeFromCart={this.removeFromCart} calculateTotalPrice={this.calculateTotalPrice} state={this.state}/>
        </div>
        <div className="rental-selector">
          <RentalSelector addToCart={this.addToCart} listings={this.state.listings} />
        </div>
      </div>
    )
  }
}
