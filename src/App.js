import React from "react";

import GlobalStyles from "./styles/globalStyles";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { ContentHeader } from "./components/ContentHeader";
import { VideoContent } from "./components/VideoContent";
import { Details } from "./components/Details";
import { Summary } from "./components/Summary";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <Header />
          <ContentHeader />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <VideoContent />
            <Details />
          </div>
          <Summary />
        </div>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
