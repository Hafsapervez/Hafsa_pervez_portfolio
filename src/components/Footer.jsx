import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <p className="flex items-center mb-4">
            Made with <FiHeart className="mx-1 text-purple-500" /> by Hafsapervez
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;