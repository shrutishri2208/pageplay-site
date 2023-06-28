import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import logo from "./assets/Vector.png";

function App() {
  return (
    <div className="App flex overflow-x-hidden">
      <Page1 page={"page1"} />
      <Page2 page={"page2"} />
      {/* <img src={logo} alt="logo" className="m-auto mt-10 logo-image" /> */}
    </div>
  );
}

export default App;
