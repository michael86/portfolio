import "./styles/Main.css";

import Nav from "./components/Nav";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Landing />
      </header>
      <Nav />
      <main>
        <Background />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
