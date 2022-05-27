import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
    </AuthContextProvider>
    
  );
}

export default App;
