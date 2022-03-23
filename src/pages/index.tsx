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
        <meta
          name="description"
          content="As a curious and enthusiastic person, I'm always looking for
              new opportunities and keep up to date with the latest trends."
        />
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
