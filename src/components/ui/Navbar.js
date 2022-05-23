// import { Container, Nav, Navbar } from "react-bootstrap";

// export const Navbar = () => {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#features">Productos</Nav.Link>
//             <Nav.Link href="#pricing">Nuevo producto</Nav.Link>
//           </Nav>
//           <Nav>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   )
// }

import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import logo from "../../assets/logo.png"
// import { AuthContext } from "../../auth/authContext";
// import { types } from "../../types/types";

export const Navbar = () => {
  //   const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // const lastPath = localStorage.getItem('lastPath') || '/marvel';
    // dispatch({
    //   type: types.logout,
    // });
    // navigate("/login", {
    //   replace: true,
    // });
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <Link className="navbar-brand shoppingCard-title mx-4" to="/">
        <img src={logo} alt="Logo"/>ShoppingCart
      </Link>

      <div className="navbar-collapse">
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

      <div className="navbar-collapse collapse order-3 dual-collapse2 d-flex justify-content-end mx-4">
        <span className="fs-5 text-white">
          <BsCartFill />
        </span>
      </div>
    </nav>
  );
};
