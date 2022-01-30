import './App.css';
import Header from './shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <AuthProvider>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="allProducts" element={<AllProducts />} />
      </Routes>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
