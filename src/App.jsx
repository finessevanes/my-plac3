import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Dashboard from "./components/Dashboard";

export default function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Profiles</Link>
            </li>
            <li>
              <Link to="/">Communities</Link>
            </li>
          </ul>
        </nav>
        <ConnectButton/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
