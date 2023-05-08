// imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// swiper css
import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/effect-cards";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import LandingPage from "./pages/LandingPage";

// App
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
