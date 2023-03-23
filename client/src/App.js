import Register from "./pages/register/Register";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
