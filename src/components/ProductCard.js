export const ProductCard = ({data, addToCart, addAnAmount, subtractAnAmount}) => {
let {name, price, quantity, tempQuantity} = data;
  return (
    <div className="card text-center mb-4">
      <div className="card-header">Producto</div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h4 className="card-text">$ {price}</h4>
        <div className="product-qty">
          <a className="btn btn-reduce" onClick={()=> subtractAnAmount(data)}>-</a>
          <input type="number" name="qty" value={tempQuantity} min="1" max="100" title="Cantidad" className="input-text qty" readOnly="readonly"/>
          <a className="btn btn-increase"  onClick={()=> addAnAmount(data)}>+</a>
        </div>
        <button onClick={()=>addToCart(data)} className="btn btn-primary">
          Agregar
        </button>
      </div>
      <div className="card-footer text-muted">Disponible {quantity} ud.</div>
    </div>
  );
};
