import { Link, NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand shoppingCard-title" to="/">
          <img src={logo} alt="Logo" />
          ShoppingCart
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <div className="navbar-nav">
            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              end
              to="/"
            >
              Productos
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                "nav-item nav-link " + (isActive ? "active" : "")
              }
              end
              to="/newproduct"
            >
              Agregar producto
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse order-3 dual-collapse2 d-none d-sm-flex justify-content-end mx-4">
          <span className="fs-5 text-white">
            <BsCartFill />
          </span>
        </div>
      </div>
    </nav>
  );
};
