// components
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Why from "../components/Why";

function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Why />
      <Projects />
    </>
  );
}

export default HomePage;
