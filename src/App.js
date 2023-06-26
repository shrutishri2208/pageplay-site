import React from "react";

import VideoPlayer from "./components/VideoPlayer";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
function App() {
  return (
    <div className="App flex overflow-x-scroll">
      <Page1 page={"page1"} />
      <Page2 page={"page2"} />
    </div>
  );
}

export default App;
