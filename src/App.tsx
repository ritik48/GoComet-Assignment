import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Hotel } from "./Pages/Hotel/Hotel";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/hotel/:hotelId" element={<Hotel />} />
      </Routes>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "15px",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
