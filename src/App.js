import GlobalStyles from "./styles/globalStyles";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";
import { ContentHeader } from "./components/ContentHeader";

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
        </div>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
