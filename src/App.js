import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";


function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/products" element={ <Products />} />
          <Route path="/about" element={ <About />} />
          <Route path="/services" element={ <Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
