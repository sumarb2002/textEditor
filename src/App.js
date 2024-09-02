// import logo from './logo.svg';
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import { useState } from "react";
import Alert from "./Components/Alert.js";
import About from "./Components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  function showAlert(msg, type) {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(function () {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#123e75";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar title={"TEXT EDITOR"} mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="*"
            element={<Editor mode={Mode} showAlert={showAlert} />}
          />
          <Route
            exact
            path="/"
            element={<Editor mode={Mode} showAlert={showAlert} />}
          ></Route>
          <Route exact path="/about" element={<About mode={Mode} />}></Route>
        </Routes>

        {/* <div className="row">
        <div className="col-12"> */}
        {/* <Editor mode={Mode}/> */}
        {/* </div> */}
        {/* <div className="container col-6">
          <About />
        </div> */}
        {/* </div> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
