import Mainindex from "./components/Mainindex";
import Navbar from "./components/Navbar"
import About from "./components/About";
// import Into from "./components/Into";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
<>
  <Router>
{/* <Into/> */}
<Navbar/>
    <Routes>
      <Route path="/" element={<Mainindex/>} />
      <Route path = "/About" element={<About/>} />
    </Routes>
  </Router>
</>
  );
}

export default App;
