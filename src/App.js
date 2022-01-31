import { Routes, Route } from "react-router-dom";
import Header from './shared/Header/Header';
import Home from './components/Home/Home';
import Footer from './shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import AllProducts from './components/AllProducts/AllProducts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './privateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrder from './components/MyOrder/MyOrder';
import AddReview from './components/AddReview/AddReview';
import PayMent from './components/PayMent/PayMent';
import PageNotFound from './components/notFoundPage/PageNotFound';
import AddService from "./components/AddService/AddService";
import MakeAdmin from "./components/MakeAdmin/MakeAdmin";
import ManageAllOrder from "./components/ManageAllOrder/ManageAllOrder";
import Shipping from "./components/Shipping/Shipping";

function App() {
  return (
    <AuthProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="allProducts" element={<AllProducts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="addService" element={
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        } />
        <Route path="dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="myOrder" element={
          <PrivateRoute>
            <MyOrder />
          </PrivateRoute>
        } />
        <Route path="addReview" element={
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        } />
        <Route path="payMent" element={
          <PrivateRoute>
            <PayMent />
          </PrivateRoute>
        } />
        <Route path="makeAdmin" element={
          <PrivateRoute>
            <MakeAdmin />
          </PrivateRoute>
        } />
        <Route path="manageAllOrder" element={
          <PrivateRoute>
            <ManageAllOrder />
          </PrivateRoute>
        } />
        <Route path="shipping" element={
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
