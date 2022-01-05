import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import About from "./components/portfolio/about/About";
import Contact from "./components/portfolio/contact/Contact";
import Works from "./components/portfolio/works/Works";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
