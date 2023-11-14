import React, { useState } from "react";
// import PortfolioBox from "./components/PortfolioBox";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = page => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="content"></div>
      <Footer />
    </div>
  );
}

export default App;
