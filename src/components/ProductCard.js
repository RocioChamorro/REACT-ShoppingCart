export const ProductCard = ({data}) => {
let {nombre, precio, cantidad} = data;
  return (
    <div className="card text-center mb-4">
      <div className="card-header">Producto</div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h4 className="card-text">$ {precio}</h4>
        <a href="#" className="btn btn-primary">
          Agregar
        </a>
      </div>
      <div className="card-footer text-muted">Disponible {cantidad} ud.</div>
    </div>
  );
};
