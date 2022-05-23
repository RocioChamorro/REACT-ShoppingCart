import { useDispatch, useSelector } from "react-redux";
import { addToCard, removeProductFromCart } from "../features/cartSlice";
import { addAnAmount, subtractAnAmount } from "../features/productsSlice";
import { CartItem } from "./CartItem.js";
import { ProductCard } from "./ProductCard";

export const ShoppingCartScreen = () => {
  const { products, status } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(products);

  const handleAddToCart = (product) => {
    dispatch(addToCard(product));
  }

  const handleAddAnAmount = (product) => {
    dispatch(addAnAmount(product));
  }

  const handleSubtractAnAmount = (product) => {
    dispatch(subtractAnAmount(product));
  }

  const handleRemoveProductFromCart = (id) => {
    dispatch(removeProductFromCart(id));
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
                <div className="col-md-4">
                  <ProductCard key={product.id} data={product} addToCart={handleAddToCart} addAnAmount={handleAddAnAmount} subtractAnAmount={handleSubtractAnAmount}/>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h3>Carrito</h3>
            {
              cartItems.map((item,index)=>(
                  <CartItem key={index} data={item} removeProductFromCart={handleRemoveProductFromCart()}/>)
              )
              
            }
          </div>
        </div>
      )}
    </div>
  );
};
