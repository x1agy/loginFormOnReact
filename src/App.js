import MainPage from "./MainPage";
import './App.css';
import "./index.css";
import Register from "./RegisterPage";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
