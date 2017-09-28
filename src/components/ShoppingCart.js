import React from 'react'
import { action } from '@storybook/addon-actions';

import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import AddItem from './AddItem';
import CartTotal from './CartTotal';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  addItemToCart = (item) => {
    this.setState((prevState) => ({ items: [...prevState.items, item] }))
  }

  render() {
    return (
      <div>
        <CartHeader />
        <AddItem products={ this.props.products } itemAdded={ this.addItemToCart } />
        <CartItems items={ this.state.items } />
        <CartTotal items={ this.state.items } />
        <CartFooter copyright={ this.props.copyright } />
      </div>
    )
  }
}

export default ShoppingCart
