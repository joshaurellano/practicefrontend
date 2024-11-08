import React, { useState } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import { Login, Registration } from './components/authentication/Authentication';
import Home from './components/Home';
import TokenedRoute from "./components/authentication/TokenedRoute";
import Footer from './components/Footer';
const App = () => {

  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={
            <TokenedRoute>
              <Home />
            </TokenedRoute>
          } />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
