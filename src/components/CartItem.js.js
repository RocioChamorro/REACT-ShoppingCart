import { BsFillTrashFill } from "react-icons/bs";

export const CartItem = ({data, removeProductFromCart}) => {
  let { id, name, price, cartQuantity } = data;

  
  const handleSubtotal = () => {
    return price * cartQuantity;
  }

  return (
    <div className="row">
      <div className="col-md-4">{name}</div>
      <div className="col-md-2">$ {price}</div>
      <div className="col-md-1">{cartQuantity}</div>
      <div className="col-md-2">$ {handleSubtotal()}</div>
      <div className="col-md-2">
        <button className="fs-5 text-danger" onClick={()=>removeProductFromCart(id)}><BsFillTrashFill /></button>
        
      </div>
    </div>
  )
}
