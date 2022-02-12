import React from "react";
import OnlineStatus from "./components/OnlineStatus";
import LocalStorage from "./components/local-storage";
function App() {
  return (
    <div className="App">
      <OnlineStatus />
      <LocalStorage />
      {/* <DocumentTitle /> */}
    </div>
  );
}

export default App;
