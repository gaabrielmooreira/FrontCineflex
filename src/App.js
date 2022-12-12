import CineflexHeader from "./components/CineflexHeader";
import MoviesPage from "./pages/MoviesPage";
import SessionsPage from "./pages/SessionsPage";
import SeatsPage from "./pages/SeatsPage";
import SuccessPage from "./pages/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <BrowserRouter>
      <CineflexHeader/>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessions/:sessionsId" element={<SessionsPage />} />
        <Route path="/seats/:seatsId" element={<SeatsPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
