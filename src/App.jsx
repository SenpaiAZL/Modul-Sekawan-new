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
import Footer from "./components/Footer";
import store from "./store/store";
import {Provider} from "react-redux"

function App() {
  const [resto, setResto] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const themes = useState("dark");
  return (
    <div className="bg-gray-300 dark:bg-gray-800">
      <BrowserRouter>
        <ThemeContext.Provider value={themes}>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />

              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/detailed" element={<Detailed />} />

              <Route path="/restaurant" element={<Restaurant />} />
              <Route path="/about" element={<About />} />

              <Route path="/product" element={<ProdView />} />
              <Route path="/proddetail/:id" element={<ProdDetail />} />

              <Route path="/country" element={<Country />} />
              <Route path="/countrydetails/:id" element={<CountryDetails />} />

              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
