import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoContent from "./pages/NoContent";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/shop" element={<Shop />} />
      <Route index element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NoContent/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  </Router>
  );
}

export default App;
