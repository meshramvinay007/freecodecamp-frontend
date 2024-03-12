import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Container from "./Container/Container";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";

const PrivateRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt");
    if (jwtToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignIn = (data) => {
    setIsLoggedIn(true);
    localStorage.setItem("jwt", data.token);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar isLoggedIn={isLoggedIn} handleSignOut={handleSignOut} />
        <Routes>
          <Route path="/" element={<Container isLoggedIn={isLoggedIn} />} />
          <Route
            path="/sign-in"
            element={
              !isLoggedIn?
                <SignUp handleSignIn={handleSignIn} />
         :<Navigate to={'/'} replace/>
            }
          />
          <Route
            path="/courses"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Courses />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
