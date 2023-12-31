import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Lab from "./pages/Lab";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/laboratory" element={<Lab />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
