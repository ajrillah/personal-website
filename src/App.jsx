import { useState } from "react";
import Header from "./section/Header";
import Hero from "./section/Hero";
import Experiences from "./section/Experiences";
import Projects from "./section/Projects";
import Contact from "./section/Contact";
import Footer from "./section/Footer";

function App() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const xPercent = (clientX / window.innerWidth) * 100;
    const yPercent = (clientY / window.innerHeight) * 100;
    setPosition({ x: xPercent, y: yPercent });
  };

  return (
    <>
      <Header />
      <main
        className="min-h-screen"
        onMouseMove={handleMouseMove}
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%,#06212e, #041720)`,
        }}
      >
        <Hero />
        <Projects />
        <Experiences />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

// import Header from "./section/Header";
// import Hero from "./section/Hero";
// import Experiences from "./section/Experiences";

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Hero />
//         <Experiences />
//       </main>
//     </>
//   );
// }

// export default App;
