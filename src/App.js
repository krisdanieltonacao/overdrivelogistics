import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Appnavbar from "./Components/Appnavbar/Appnavbar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Appnavbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
