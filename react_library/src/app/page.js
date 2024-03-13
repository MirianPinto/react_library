'use client'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from "../components/Login";
import Library from "../components/Library"

export default function Home() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/Home" element={<Library/>}/>
      </Routes>
    </Router>
    </>
  );
}
