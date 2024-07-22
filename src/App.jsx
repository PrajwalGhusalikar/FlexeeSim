import "./App.css";
import FlexeeOverview from "./components/FlexeeOverview";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";
import Values from "./components/Values";

function App() {
  return (
    <div className="App">
      <Home />
      <FlexeeOverview/>
      <Testimonials/>
      <Values/>
      <Footer/>
    </div>
  );
}

export default App;
