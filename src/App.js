import React, { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "lch(14 26.57 274.15)";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>

      <Router>
        <Navbar title="Text Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}></Alert>

        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextFrom heading="Enter text to analyse" mode={mode}
              showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
