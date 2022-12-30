import React, { Suspense } from "react";
import Mainindex from "./components/Mainindex";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import { WavyContainer } from "react-wavy-transitions";
import { MutatingDots } from "react-loader-spinner";
import './App.css'
// import About from "./components/About";
// import Into from "./components/Into";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const About = React.lazy(() => import("./components/About"));

function App() {



  return (
    <>
        <Router>
          <WavyContainer />
          {/* <Into/> */}
          <Navbar />
          <Main />
          <Suspense
        fallback={
          <div className="loader">
            <MutatingDots
              height="100"
              width="100"
              color="#323336"
              secondaryColor="#323336"
              radius="12.5"
              ariaLabel="mutating-dots-loading"
              wrapperStyle={{}}
              // wrapperClass=""
              visible={true}
            />
          </div>
        }
      >
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Mainindex />} />
          </Routes>
      </Suspense>
        </Router>
    </>
  );
}

export default App;
