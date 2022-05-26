import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LionForm from "./pages/LionForm.js";
import Display from "./pages/Display.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LionForm />} />
        <Route exact path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
