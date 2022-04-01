import React from "react";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutImg1 from "./images/Frame 19.png";
import aboutImg2 from "./images/download.png";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About image={aboutImg1} title="All you need is here" button="Get the App"/>
      <Presentation/>
      <About image={aboutImg2} title="Donwload this Application today" button="Download"/>
      <Contact/>
    </div>
  );
}

export default App;
