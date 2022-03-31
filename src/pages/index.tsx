import Head from "next/head";

// components
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Why from "../components/Why";

function HomePage() {
  return (
    <>
      <Head>
        <title>Aäron Staes Media | Design - Full Stack Development</title>
      </Head>
      <Navbar />
      <Header />
      <About />
      <Why />
      <Projects />
      <Footer />
    </>
  );
}

export default HomePage;
