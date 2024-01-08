import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MapComponent from "./Components/MapComponent";
import './styles.css'
import Login from "./Components/Login";
import { useAuth } from "./AuthContext";
import Sidebar from "./Components/Sidebar";

export default function App() {
  const { authenticated } = useAuth();
  return (
    <div className="page">

      <BrowserRouter>
      <Routes>
      <Route index element={<Login/>}/>
      <Route path="/dashboard" 
      element={authenticated ? <Sidebar/> : <Navigate to="/"/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
