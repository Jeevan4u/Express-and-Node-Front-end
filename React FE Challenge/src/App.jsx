import { Route, Routes } from "react-router-dom";
import Footer from "./layout/footer/footer";
import Navbar from "./layout/header/navbar";
import Hero from "./pages/Home";
import Login from "./pages/login/login";
import { useSelector } from "react-redux";
import { appSelector } from "./features/slice/appSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/dashboard";
import DashboardMain from "./pages/dashboardMain";
import Product from "./pages/createProudct/product";
import ViewProducts from "./pages/createProudct/viewProduct";

function App() {
  const { token } = useSelector(appSelector);

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute user={token.product_token} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardMain />} />
            <Route path="create-product" element={<Product />} />
            <Route path="products/:id" element={<ViewProducts />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
