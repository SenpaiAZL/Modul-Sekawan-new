/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Homepage";
import Navbar from "./components/Navbar";
import Detail from "./Pages/Restaurant/Detail";
import Error404 from "./Pages/Restaurant/Error404";
import Restaurant from "./Pages/Restaurant/Restaurant";
import About from "./Pages/Restaurant/About";
import Detailed from "./Pages/Restaurant/Detailed";
import "./assets/Card.scss";
import ProdView from "./Pages/Product/ProdView";
import ProdDetail from "./Pages/Product/ProdDetail";
import Country from "./Pages/Country/Country";
import CountryView from "./Pages/Country/CountryView";
import CountryDetails from "./Pages/Country/CountryDetails";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const [resto, setResto] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const themes = useState("light");
  return (
    <div className="">
      <BrowserRouter>
        <ThemeContext.Provider value={themes}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />

            <Route path="Detail/:id" element={<Detail />} />
            <Route path="Detailed" element={<Detailed />} />

            <Route path="Restaurant" element={<Restaurant />} />
            <Route path="About" element={<About />} />

            <Route path="Product" element={<ProdView />} />
            <Route path="ProdDetail/:id" element={<ProdDetail />} />

            <Route path="Country" element={<Country />} />
            <Route path="CountryDetails/:id" element={<CountryDetails />} />

            <Route path="*" element={<Error404 />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
