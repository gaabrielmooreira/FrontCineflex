import CineflexHeader from "./components/CineflexHeader";
import MoviesPage from "./pages/MoviesPage";
import SessionsPage from "./pages/SessionsPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [purchaseDetails,setPurchaseDetails] = useState({
    title:"",
    date:"",
    time:"",
    seats: [],
    name:"",
    cpf:"" 
  });
  
  return (
    <BrowserRouter>
      <CineflexHeader/>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessions/:movieId" element={<SessionsPage />} />
        <Route path="/seats/:sessionId" element={<SeatsPage setPurchaseDetails={setPurchaseDetails}/>} />
        <Route path="/success" element={<SuccessPage purchaseDetails={purchaseDetails} setPurchaseDetails={setPurchaseDetails}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
