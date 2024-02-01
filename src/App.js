import "./App.css";
import Detail from "./components/Detail";
import { Forms } from "./components/Forms";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/details" element={<Detail />}></Route>
          <Route exact path="/form" element={<Forms />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
