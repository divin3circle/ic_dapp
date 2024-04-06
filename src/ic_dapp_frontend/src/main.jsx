import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Error from "./components/error/Error";
import Explore from "./pages/Explore";
import Fantasy from "./pages/Fantasy";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     component: <App />,
//   },
//   {
//     path: "/app",
//     component: <Home />,
//   },
//   {
//     path: "/profile",
//     component: <Profile />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/app" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<Explore />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
