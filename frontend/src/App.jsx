import { useEffect, useState } from "react";
import "./App.css";

const PORT = import.meta.env.VITE_PORT;

function App() {
  
  return (
    <main className="container">
      <header style={{ border: "2px solid black" }}>Header</header>
      <aside className="left-sidebar">Sidebar</aside>
      <div
        className="overflow-container"
        style={{ border: "2px solid lightblue" }}
      >
        
      </div>
    </main>
  );
}

export default App;
