import React from "react";
import { Route } from "react-router-dom";
import DetailUser from "./views/DetailUser";
import Results from "./views/Results";

function App() {
  return (
    <div style={{ margin: "20px" }}>
      <Route path="/" exact render={() => <Results />} />
      <Route path="/detail" render={() => <DetailUser />} />
    </div>
  );
}

export default App;
