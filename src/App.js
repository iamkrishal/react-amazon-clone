import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";


function App() {
  return (
    <BrowserRouter>
        <Header />

    <Routes>
      <Route path="/" element={<div>
        <Home />
      </div>}></Route>

      <Route path="/checkout" element={<div>
        <Checkout />
      </div>}></Route>
    </Routes>
      <div className="app">
      
    </div></BrowserRouter>
  );
}

export default App;
