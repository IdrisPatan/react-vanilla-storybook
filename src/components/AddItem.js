import React from 'react'
import {Row, Input, Button} from 'react-materialize'

const AddItem = ({
  products,
  itemAdded
}) => {
  const itemWasAdded = (e) => {
    e.preventDefault()
    itemAdded({
      quantity: e.target.quantity.value,
      product: products.find((product) => (product.id === parseInt(e.target.productId.value, 10)))
    })
  }

  return (
    <form className="container" onSubmit={ itemWasAdded }>
      <h3>Add Item</h3>
      <Row>
      	<Input s={6} type='select' label="Choose a Product" name="productId">
          { products.map((prod) =>
            <option key={ prod.id } value={ prod.id }>{ prod.name }</option>
          )}
        </Input>
      </Row>
      <Row>
        <Input s={2} type='number' label="Quantity" defaultValue='1' name="quantity"></Input>
      </Row>
      <Button waves='light'>Add Item</Button>
    </form>
  )
}

export default AddItem


/*
<Select name={field}>
    {FBButtons.map(fbb =>
      <option key={fbb.key} value={fbb.key}>{fbb.value}</option>
    )};
  </Select>


            { products.map((prod) => ('<option value="' + prod.name + '" ' + prod.name + ' />') }
*/
