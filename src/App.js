import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import MainPage from "./pages/MainPage";
import Apply from "./pages/Apply.js";
import VotePage from "./pages/VotePage";

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box; 
    }
    body {
      background-color: #121212;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%
    }
    ::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/vote" element={<VotePage />} />
      </Routes>
    </Router>
  );
}

export default App;