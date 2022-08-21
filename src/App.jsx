import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Dashboard from "./components/Dashboard";

// build on app, on success log in, route to dashboard

export default function App() {
  
  return (
    <Router>
      <div>
        <ConnectButton/>
        <Routes>
          <Route path="/" element={<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
