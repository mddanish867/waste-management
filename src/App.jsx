import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-green-50">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <div className="absolute bottom-4 left-4 bg-green-500 h-4 w-4 rounded-full"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
