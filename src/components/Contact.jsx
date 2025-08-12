import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheck, FiX } from 'react-icons/fi';
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Nr9r5e9vKHVkdvh5_');
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // First verify the form data
      console.log('Form data:', {
        name: form.current.user_name.value,
        email: form.current.user_email.value,
        message: form.current.message.value
      });

      // Send the email
      const result = await emailjs.sendForm(
        'service_pu38bl2', 
        'template_ggottvs', 
        form.current,
        'Nr9r5e9vKHVkdvh5_'
      );

      console.log('EmailJS Response:', result);
      
      if (result.status === 200) {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        throw new Error('Email failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error Details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl font-bold mb-4 flex items-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="text-purple-500 mr-2">#</span>Get In Touch
          </h2>
          <p className={`mb-12 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out—I'm always open to new ideas and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                }`}
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                }`}
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block mb-2 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                  darkMode ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500'
                }`}
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                isSubmitting 
                  ? 'bg-gray-500 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-green-500"
              >
                <FiCheck /> Message sent successfully!
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-500"
              >
                <FiX /> Failed to send message. Please try again.
              </motion.div>
            )}
          </motion.form>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
          >
            <h3 className={`text-xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Other Ways to Connect</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-500 bg-opacity-20' : 'bg-purple-100'}`}>
                  <FiMail className="text-purple-500" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email me at</p>
                  <a 
                    href="mailto:hafsapervez203@gmail.com" 
                    className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    hafsapervez203@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-500 bg-opacity-20' : 'bg-purple-100'}`}>
                  <FiLinkedin className="text-purple-500" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Connect on</p>
                  <a 
                    href="https://www.linkedin.com/in/hafsa-pervez-3210402a6/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-500 bg-opacity-20' : 'bg-purple-100'}`}>
                  <FiGithub className="text-purple-500" />
                </div>
                <div>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Follow on</p>
                  <a 
                    href="https://github.com/Hafsapervez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`hover:text-purple-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;