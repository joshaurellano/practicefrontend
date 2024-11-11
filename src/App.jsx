import React, { useState } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import { Login, Registration } from './components/authentication/Authentication';
import Home from './components/Home';
import TokenedRoute from "./components/authentication/TokenedRoute"
import Department from "./components/department/Department";
import Footer from './components/Footer';
import Landing from "./components/Landing";
const App = () => {
  return (
    <>  
          <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={
            <TokenedRoute>
              <Home />
            </TokenedRoute>
          } />
          <Route path="/department" element={
            <TokenedRoute>
              <Department />
            </TokenedRoute>
          } 
          
          />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
