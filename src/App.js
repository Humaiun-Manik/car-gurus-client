import './App.css';
import Header from './shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import AllProducts from './components/AllProducts/AllProducts';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './privateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard';

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
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
