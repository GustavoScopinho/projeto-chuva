import GlobalStyles from "./styles/globalStyles";
import { SideBar } from "./components/SideBar";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <Header />
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
