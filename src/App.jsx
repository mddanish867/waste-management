import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-green-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/landingpage" element={<LandingPage />} />

        </Routes>
        <div className="absolute bottom-4 left-4 bg-green-500 h-4 w-4 rounded-full"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
