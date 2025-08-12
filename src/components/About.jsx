import React, { useState } from 'react';
import { motion } from 'framer-motion';

const About = ({ darkMode }) => {
  const skills = [
    'JavaScript', 'MERN Stack', 'React', 'Node.js', 'Express', 'MongoDB',
    'HTML/CSS', 'Tailwind', 'Git', 'Figma', 'Python','c++','Machine Learning'
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
                I’m a Fresh Graduate In Software Engineering and passionate about building Full Stack Web Applications
                skilled in React, Node.js, Express, MongoDB, Tailwind CSS, and Figma, creating seamless digital experiences
                from design to deployment.

              </p>

              <p className="leading-relaxed mb-5">
                I’ve developed projects ranging from an AI-powered Fake News Detection System, a feature-rich Food 
                Delivery App with payment integration, order tracking, and multi-restaurant support, as well as
                productivity tools like a Text Editing Platform and a News API Website. Along the way, I’ve mastered the 
                complete development workflow from designing in Figma to deploying live applications.
              </p>

              {/* Read more collapsible */}
              <div className={`overflow-hidden transition-[max-height] duration-300 'max-h-[1000px]' : 'max-h-0'}`}>
                <p className="leading-relaxed">
                  I’m currently focused on building accessible, scalable, and human-centered products 
                  that solve real-world problems.I aim to merge creativity with functionality to deliver exceptional solutions
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
                    { label: 'Backend', pct: 50 },
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
