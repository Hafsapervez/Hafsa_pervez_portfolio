import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Hero = ({ darkMode }) => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/Hafsapervez' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/hafsa-pervez-3210402a6/' },
    { icon: <FiTwitter />, url: 'https://twitter.com/hafsaaapervez' },
    { icon: <FiMail />, url: 'mailto:hafsapervez203@gmail.com' },
  ];

  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col items-center justify-center text-center overflow-visible">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-purple-500">Hafsa Pervez</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-8 text-gray-500 dark:text-gray-400">
            Junior Full Stack Web Developer
          </h2>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            I design and build user-friendly, visually appealing, and responsive websites that focus on 
            delivering seamless experiences.
          </p>
          
          <div className="flex justify-center gap-6 mb-10">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: '#8B5CF6' }}
                className="text-2xl p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium shadow-lg"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;