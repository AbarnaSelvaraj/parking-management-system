import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataBase from "./Components/DataBase";
import Add from "./Components/Add";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataBase />} />
        <Route path="/add" element={<Add />} />
        <Route path="/check-out" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
