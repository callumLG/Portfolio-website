import Navbar from "./components/Navbar";
import Greet from "./components/Greet";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Greet />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
