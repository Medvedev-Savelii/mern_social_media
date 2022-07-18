import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "50%", left: "-8rem" }}></div>
      <div className="blur" style={{ top: "-3rem", right: "0%" }}></div>
      {/* <Home /> */}
      {/* <Profile /> */}
      <Auth />
    </div>
  );
}

export default App;
