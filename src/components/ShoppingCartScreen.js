import { useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";

export const ShoppingCartScreen = () => {
  const { products, status } = useSelector((state) => state.products);
  console.log(products);
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
                  <ProductCard key={product.identificación} data={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      )}
    </div>
  );
};
