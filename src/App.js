import "./App.css";
import MainFile from "./Components/MainFile";
import { Provider } from "react-redux";
import Store from "./Components/Redux/Store";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <NavbarTop /> */}
      {/* <NavbarSide /> */}
      <Provider store={Store}>
        <MainFile />
        <main>
          <Outlet />         
        </main>
      </Provider>
      {/* <Chart3 /> */}
    </div>
  );
}

export default App;
