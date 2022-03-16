import { Navbar } from "./components";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mockman" element={<Mockman />} />
        </Routes>
    </div>
  );
}

export default App;
