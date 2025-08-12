import { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      {/* ✅ Custom Cursor */}
      <motion.div
        key="cursor"
        className="fixed w-6 h-6 rounded-full bg-purple-500 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container mx-auto px-4 py-20 relative z-10">
        <AnimatePresence mode="wait">
          <Hero darkMode={darkMode} key="hero" />
          <About key="about" />
          <Projects darkMode={darkMode} key="projects" />
          <Contact darkMode={darkMode} key="contact" />
        </AnimatePresence>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

// import { useState, useEffect, useCallback } from 'react'; // Added useCallback here
// import { motion, AnimatePresence } from 'framer-motion';
// import Particles from 'react-tsparticles';
// import { loadSlim } from '@tsparticles/slim';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [darkMode, setDarkMode] = useState(true);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

//   // Properly defined particlesInit with useCallback
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   // Cursor position tracker
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       {/* Particles Background */}
//       <div className="fixed inset-0 -z-10 opacity-20">
//         <Particles
//           init={particlesInit}
//           options={{
//             particles: {
//               number: {
//                 value: 80,
//                 density: {
//                   enable: true,
//                   value_area: 800
//                 }
//               },
//               color: {
//                 value: darkMode ? '#a78bfa' : '#7c3aed'
//               },
//               shape: {
//                 type: 'circle'
//               },
//               opacity: {
//                 value: 0.5,
//                 random: true
//               },
//               size: {
//                 value: 3,
//                 random: true
//               },
//               links: {
//                 enable: true,
//                 distance: 150,
//                 color: darkMode ? '#c4b5fd' : '#8b5cf6',
//                 opacity: 0.3,
//                 width: 1
//               },
//               move: {
//                 enable: true,
//                 speed: 1,
//                 direction: 'none',
//                 random: true,
//                 straight: false,
//                 out_mode: 'out'
//               }
//             },
//             interactivity: {
//               detect_on: 'window',
//               events: {
//                 onhover: {
//                   enable: true,
//                   mode: 'repulse'
//                 }
//               }
//             }
//           }}
//         />
//       </div>

//       {/* Custom cursor */}
//       <motion.div
//         className="fixed w-6 h-6 rounded-full bg-purple-500 pointer-events-none z-50 mix-blend-difference"
//         animate={{
//           x: cursorPosition.x - 12,
//           y: cursorPosition.y - 12,
//         }}
//         transition={{ type: 'spring', damping: 20, stiffness: 300 }}
//       />

//       <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
//       <main className="container mx-auto px-4 py-20 relative z-10">
//         <AnimatePresence>
//           <Hero darkMode={darkMode} />
//           <About />
//           <Projects darkMode={darkMode} />
//           <Contact darkMode={darkMode} />
//         </AnimatePresence>
//       </main>
      
//       <Footer darkMode={darkMode} />
//     </div>
//   );
// }

// export default App;
