import React from 'react'

const CartTotal = ({ items }) => {
  let totalInCents = items.reduce((sum, item) => (sum + item.product.priceInCents * item.quantity), 0)

  return (
    <div className="collection-item">
      <div className="row">
        <div className="col s8"></div>
        <div className="col s2">Total: ${ totalInCents / 100.0 }</div>
        <div className="col s2"></div>
      </div>
    </div>
  )
}

export default CartTotal
