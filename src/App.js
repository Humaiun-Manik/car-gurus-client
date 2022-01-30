import './App.css';
import Header from './shared/Header/Header';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
