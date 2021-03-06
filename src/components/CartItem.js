import React from 'react'

const CartItem = ({ item }) => { //console.log(key); console.log(item);
  return (
  <div className="collection-item">
    <div className="row">
      <div className="col s8">{ item.product.name }</div>
      <div className="col s2">${ item.product.priceInCents / 100.0 }</div>
      <div className="col s2">{ item.quantity }</div>
    </div>
  </div>
)}

export default CartItem
