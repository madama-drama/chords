import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, MyChords, SongerPage, WordsChords } from "./pages";

const client = new QueryClient();

function App() {
  return (
    <body className="page">
      <QueryClientProvider client={client}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chords/:songer/:songName" element={<WordsChords />} />
          <Route path="/myChords" element={<MyChords />} />
          <Route path="/:songer" element={<SongerPage />} />
        </Routes>
      </QueryClientProvider>
    </body>
  );
}

export default App;
