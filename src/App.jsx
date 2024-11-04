import React, { useState } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import TokenedRoute from "./components/TokenedRoute";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation(); 

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
      <div>
        {location.pathname !=="/home" &&(
        <button onClick={toggleView}>
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>)}

        <Routes>
          <Route path="/" element={isLogin ? <Login /> : <Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={
            <TokenedRoute>
              <Home />
            </TokenedRoute>
          } />
        </Routes>
      </div>
  );
};

export default App;
