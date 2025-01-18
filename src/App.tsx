import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Hotel } from "./Pages/Hotel/Hotel";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/hotels" element={<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
