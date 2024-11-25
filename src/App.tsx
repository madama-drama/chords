import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, MyChords, WordsChords } from "./pages";

function App() {
  return (
    <body className="page">


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chords/:songer/:songName" element={<WordsChords/>}/>
        <Route path="/myChords" element={<MyChords/>}/>
      </Routes>
    </body>
  );
}

export default App;
