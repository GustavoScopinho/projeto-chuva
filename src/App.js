import React from "react";

import { BrowserView, MobileView, isMobile } from "react-device-detect";

import GlobalStyles from "./styles/globalStyles";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { ContentHeader } from "./components/ContentHeader";
import { VideoContent } from "./components/VideoContent";
import { Details } from "./components/Details";
import { Summary } from "./components/Summary";
import { Discussions } from "./components/Discussions";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserView>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideBar />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginLeft: "13.75rem",
            }}
          >
            <Header />
            <ContentHeader />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <VideoContent />
              <Details />
            </div>
            <Summary />
            <Discussions />
            <Footer />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Header />
            <ContentHeader />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <VideoContent />
              <Details />
            </div>
            <Summary />
            <Discussions />
            <Footer />
          </div>
        </div>
      </MobileView>
      <GlobalStyles />
    </>
  );
}

export default App;
