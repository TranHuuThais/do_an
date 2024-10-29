import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Admin from "./pages/admin/dashboard";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        

      </Routes>
      <Footer />
    </>
  );
}

export default App;
