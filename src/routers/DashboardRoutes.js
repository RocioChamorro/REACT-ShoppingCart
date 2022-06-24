import { Route, Routes } from "react-router-dom";

import { ShoppingCartScreen } from "../components/ShoppingCartScreen";
import { NewProductScreen } from "../components/NewProductScreen";
import { Navbar } from "../components/ui/Navbar";

const DashboardRoutes = () => {
  return (
    <div className="shopping-cart-container">
      <Navbar />
      
      <div className="m-4">
        <Routes>
          <Route path="newproduct" element={<NewProductScreen />} />
          <Route path="/" element={<ShoppingCartScreen />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardRoutes;
