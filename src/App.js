import { Navbar } from "./components";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import {Home} from "./pages";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
