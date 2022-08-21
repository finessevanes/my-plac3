import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Onboard from "./components/Onboard";
import Dashboard from "./components/Dashboard";
import SignupForm from "./components/SignupForm";

// build on app, on success log in, route to dashboard

export default function App() {
  
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Onboard />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/create" element={<SignupForm />}/>
        </Routes>
      </div>
    </Router>
  );
}
