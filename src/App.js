import React from "react";
import Navigation from "./components/Navigation";
import MaterialCard from "./components/MaterialCard";
import MaterialRequestModal from "./components/MaterialRequestModal";

function App() {
  return (
    <div className="p-12 font-bold text-4xl">
      <Navigation></Navigation>
      <MaterialRequestModal></MaterialRequestModal>
    </div>
  );
}

export default App;
