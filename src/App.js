import React, { useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// import { Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
      disable: window.innerWidth < 992
    });
  }, []);

  return (
    <div className="App ">
      <Home />
    </div>
  );
}

export default App;
