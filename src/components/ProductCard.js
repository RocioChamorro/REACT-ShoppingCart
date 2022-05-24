import { FaMinus, FaPlus } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";

export const ProductCard = ({ data, addToCart, addAnAmount, subtractAnAmount }) => {
  let { name, price, quantity, tempQuantity } = data;
  return (
    <div className="card text-center mb-4">
      <div className="card-header">Producto</div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h4 className="card-text mb-3">$ {price}</h4>
        <div className="mb-1">
          <button type="button"
          className="text-black-50 container-transparent"
          onClick={() => subtractAnAmount(data)}
        >
          <FaMinus />
        </button>
          <input
            type="number"
            name="qty"
            value={tempQuantity}
            min="1"
            max="100"
            title="Cantidad"
            className="container-transparent text-center"
            readOnly="readonly"
          />
          <button type="button"
          className="text-black-50 container-transparent"
          onClick={() => addAnAmount(data)}
        >
          <FaPlus />
        </button>
        </div>
        <button
          onClick={() => addToCart(data)}
          className="btn btn-outline-success"
        >
          <span className="text-green me-2">
            <BsCartFill />
          </span>
          Agregar
        </button>
      </div>
      <div className="card-footer text-muted">Disponible {quantity} ud.</div>
    </div>
  );
};
