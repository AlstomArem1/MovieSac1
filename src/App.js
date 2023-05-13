import { Routes, Route } from "react-router-dom";
import Home from "./compenents/pages/home/Home";
import Header from "./compenents/Header/header";
export default function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}