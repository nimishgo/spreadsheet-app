import React from "react";
import { Header } from "./components/Header";
import { Grid } from "./components/Grid";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Grid />
    </div>
  );
};

export default App;
