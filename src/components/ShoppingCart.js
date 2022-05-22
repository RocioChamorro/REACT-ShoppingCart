import { useSelector } from "react-redux"



export const ShoppingCart = () => {
    const { products, status} = useSelector(state => state.products);
    console.log(products)
  return (
    <div>ShoppingCart</div>
  )
}
