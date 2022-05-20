import Head from "next/head";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
      {/* <Navbar /> */}
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={.2}  >
          <Header />
        </ParallaxLayer>
        <ParallaxLayer offset={.9999} speed={.6} className=' bg-gray-50 flex justify-center items-center' >
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={.6}>
          <Why />
        </ParallaxLayer>
        <ParallaxLayer offset={3}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer offset={4}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default HomePage;
