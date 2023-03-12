import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Database from "./components/Database";
import Forms from "./components/Forms";

function App() {
  const template = {
    name: " ",
    email: " ",
    role: " ",
    check: false,
  };
  const peopleLists = [
    {
      name: "Hasan",
      email: "hasan@hasan.com",
      role: "Project Manager",
    },
    {
      name: "Taner",
      email: "taner@htaner.com",
      role: "Physicist / Sr. Developer",
    },
    {
      name: "Paşa",
      email: "pasa@pasa.com",
      role: "Designer - Developer",
    },
    {
      name: "Aslı",
      email: "asli@asli.com",
      role: "Tatlıcı",
    },
    {
      name: "Hamdi",
      email: "hamdi@hamdi.com",
      role: "CTO",
    },
  ];

  return (
    <div className="App">
      <div className="center-div">
        <Routes>
          <Route
            path="/"
            element={<Forms peoples={peopleLists} template={template} />}
          />
          <Route path="/dblist" element={<Database peoples={peopleLists} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
