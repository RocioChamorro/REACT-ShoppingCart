import { useDispatch, useSelector } from "react-redux";
import { addToCard, clearCart, removeProductFromCart, totalCartSum } from "../features/cartSlice";
import { addAnAmount, subtractAnAmount } from "../features/productsSlice";
import { CartItem } from "./CartItem.js";
import { ProductCard } from "./ProductCard";

export const ShoppingCartScreen = () => {
  const { products, status } = useSelector((state) => state.products);
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(products);

  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
    dispatch(totalCartSum(product));
  }

  const handleAddAnAmount = (product) => {
    dispatch(addAnAmount(product));
  }

  const handleSubtractAnAmount = (product) => {
    dispatch(subtractAnAmount(product));
  }

  const handleRemoveProductFromCart = (id) => {
    dispatch(removeProductFromCart(id));
    dispatch(totalCartSum());
  }

  const handleClearCart = (id) => {
    dispatch(clearCart(id));
    dispatch(totalCartSum());
  }

  return (
    <div>
      {status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              {products.map((product) => (
                <div key={product.id} className="col-md-4">
                  <ProductCard key={product.id} data={product} addToCart={handleAddToCart} addAnAmount={handleAddAnAmount} subtractAnAmount={handleSubtractAnAmount}/>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h3>Carrito</h3>
            {
              cartItems.map((item,index)=>(
                  <CartItem key={index} data={item} removeProductFromCart={handleRemoveProductFromCart}/>)
              )
              
            }
            <div className="row">
              <div className="col-md-12">$ {cartTotalAmount}</div>
            </div>
            <div className="row">
              <div className="col-md-6"><button type="button" className="btn btn-outline-success" onClick={()=>handleClearCart()}>Limpiar</button></div>
              <div className="col-md-6"><button type="button" className="btn btn-success">Comprar</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
