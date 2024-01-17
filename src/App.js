import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (

    <div className="w-[100vw] h-[900px] bg-richblack-900 flex flex-col">

      {/* In first section of our page there is Navbar */}
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

      {/* In second section there are different routes to the pages */}
      {/* There is differnet pages that has to be shown in second section of the page */}

      <Routes>

        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Login Page Route */}
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

        {/* Sign Up Page Route */}
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />

        {/* Dashboard Page Route */}
        <Route path="/dashboard" element={
          <PrivateRoute loggedIn={loggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />

      </Routes>

    </div>
  );
}

export default App;
