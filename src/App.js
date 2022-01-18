import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
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
