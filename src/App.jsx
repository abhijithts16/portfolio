import Summary from "./components/summary";
import Navbar from "./components/navbar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="summary">
        <Summary />
      </div>

      <div id="intro">
        <Intro />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
