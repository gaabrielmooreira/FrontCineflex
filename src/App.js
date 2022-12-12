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
        <Route path="/sessoes/:movieId" element={<SessionsPage />} />
        <Route path="/assentos/:sessionId" element={<SeatsPage setPurchaseDetails={setPurchaseDetails}/>} />
        <Route path="/sucesso" element={<SuccessPage purchaseDetails={purchaseDetails} setPurchaseDetails={setPurchaseDetails}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
