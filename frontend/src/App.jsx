import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Printemps from "./pages/Printemps/Printemps";
import Ete from "./pages/Ete/Ete";
import Automne from "./pages/Automne/Automne";
import Hiver from "./pages/Hiver/Hiver";
import Autres from "./pages/Autres/Autres";
import "./reset.scss";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/printemps" element={<Printemps />} />
          <Route path="/ete" element={<Ete />} />
          <Route path="/automne" element={<Automne />} />
          <Route path="/hiver" element={<Hiver />} />
          <Route path="/autres" element={<Autres />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
