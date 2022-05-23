export const CartItem = ({data, removeProductFromCart}) => {
  let { name, price, quantity } = data;

  
  const handleSubtotal = () => {
    return price.Number() * quantity;
  }

  return (
    <div className="row">
      <div className="col-md-4">{name}</div>
      <div className="col-md-2">{price}</div>
      <div className="col-md-1">{quantity}</div>
      <div className="col-md-2">{handleSubtotal()}</div>
    </div>
  )
}
