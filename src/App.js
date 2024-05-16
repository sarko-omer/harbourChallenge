import "./app.css";

import Header from "./components/Header";
import BottomStickyBar from "./components/BottomStickyBar";
import Hero from "./components/Hero";
import About from "./components/About";
import AboutInfo from "./components/AboutInfo";
import SliderCard from "./components/SliderCard";
import CustomAccordion from "./components/CustomAccordion";
import CustomButtonAnimation from "./components/CustomButtonAnimation";

function App() {
  return (
    <div >
      <Header/>
      <Hero/>
      <AboutInfo />
      <About />
      {/* Slider Section */}
      {/* Faq Secton */}
      {/* <SliderCard /> */}
      <CustomAccordion />
      <BottomStickyBar/>
    </div>
  );
}

export default App;
