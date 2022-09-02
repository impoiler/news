import "./App.css";
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Popular from "./components/Popular";
import Section from "./components/Section";
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return <>
    <BrowserRouter>
    <Navbar/>
    <Categories/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/section" element={<Section/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
