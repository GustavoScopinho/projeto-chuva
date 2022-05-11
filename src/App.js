import GlobalStyles from "./styles/globalStyles";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { ContentHeader } from "./components/ContentHeader";
import { VideoContent } from "./components/VideoContent";
import { Details } from "./components/Details";

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
        </div>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
