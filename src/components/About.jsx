import { useState } from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  const skills = [
    'JavaScript', 'HTML/CSS','React','Figma','Tailwind','BootStrap' ,'Adobe XD' ,
    'SEO','Framer Motion','Node.js', 'Express', 'MongoDB', 'Git', 'Python','MySQL','REST APIs'
  ];

  const [tab, setTab] = useState('about');          // mobile tabs
  const cardBase = darkMode
    ? 'bg-gray-800/70 border-gray-700 text-gray-100'
    : 'bg-white border-gray-200 text-gray-800';

  return (
    <section id="about" className="py-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-6xl px-4"
      >
        <h2 className="text-3xl font-bold mb-4 flex items-center dark:text-white">
          <span className="text-purple-500 mr-2"></span>About Me
     </h2>

        {/* Mobile tabs */}
        <div className="md:hidden mb-6 flex gap-2">
          {['about', 'skills'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition
                ${tab === t
                  ? 'bg-purple-600 text-white'
                  : darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-700'}
              `}
            >
              {t === 'about' ? 'About' : 'Skills'}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: ABOUT content */}
          <div className={`${tab === 'about' ? 'block' : 'hidden md:block'}`}>
            <div className={`rounded-2xl border p-5 ${cardBase}`}>
              <p className="leading-relaxed mb-5">
                I’m a passionate Frontend Developer and Software Engineering graduate, skilled at turning Figma/XD designs into pixel-perfect, responsive, and SEO-optimized web experiences.
                My core expertise includes React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and Bootstrap, with a solid understanding of UI/UX principles, cross-browser compatibility, and performance optimization.

              </p>

              <p className="leading-relaxed mb-5">
                I’ve built interactive projects including a Food Delivery App with Multi Restaurant Support, a News API Website with category filtering, and a Portfolio Website designed for recruiters with smooth animations 
                and clean navigation. I also have hands-on exposure to backend fundamentals (Node.js, Express, REST APIs) and integrating AI features (like a Fake News Detection system) — giving me a full-picture view of how frontends connect to backends for reliable user experiences.
              </p>

              {/* Read more collapsible */}
              <div className={`overflow-hidden transition-[max-height] duration-300 'max-h-[1000px]' : 'max-h-0'}`}>
                <p className="leading-relaxed">
                  Currently, I’m focused on creating accessible, scalable, and user-centric interfaces that work seamlessly across devices and deliver great performance.
                </p>
              </div>
            </div>
          </div>

          {/* Right: SKILLS */}
          <div className={`${tab === 'skills' ? 'block' : 'hidden md:block'}`}>
            {/* Sticky card so long text on left doesn't push skills away */}
            <div className="md:sticky md:top-24">
              <div className={`rounded-2xl border p-5 ${cardBase}`}>
                <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`}>
                  My Skills
                </h3>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-full text-sm
                        ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-200 text-gray-800'}
                        shadow-sm`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Optional: tiny proficiency bars (looks tidy) */}
                <div className="mt-6 space-y-3">
                  {[
                    { label: 'Frontend', pct: 80 },
                    { label: 'Backend', pct: 20},
                    { label: 'UI/UX', pct: 70 },
                  ].map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{r.label}</span>
                        <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{r.pct}%</span>
                      </div>
                      <div className={darkMode ? 'bg-gray-700' : 'bg-gray-200'} style={{ height: 6, borderRadius: 9999 }}>
                        <div
                          className="bg-purple-600"
                          style={{ width: `${r.pct}%`, height: 6, borderRadius: 9999 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* tiny note card */}
              <div className={`mt-4 rounded-2xl border p-4 text-sm ${cardBase}`}>
                Open to freelancing & full-time roles.
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
