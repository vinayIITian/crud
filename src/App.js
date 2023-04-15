import "./App.css";
import Create from "./Components/create/create";
import Read from "./Components/read/read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./Components/update/update";
import Delete from "./Components/delete/delete";

function App() {
  return (
    <div className="main">
      <div className="main-2">
        <h3 className="main-2-h">Employee Management Operations</h3>
      </div>
      <Router>
        <Routes>
          <Route exact={true} path="/" element={<Create />} />
          <Route exact={true} path="/read" element={<Read />} />
          <Route exact={true} path="/update" element={<Update />} />
          <Route exact={true} path="/delete" element={<Delete />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
