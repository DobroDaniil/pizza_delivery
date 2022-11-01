import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import {Route, Routes} from "react-router-dom";
import './scss/app.scss';

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
              <Routes>
                  <Route exact path="/" element={<Home/>} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/cart" element={<Cart />} />
              </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
