// import { motion } from "framer-motion";
// import { FiDownload, FiArrowRight } from "react-icons/fi";

// const DownloadCV = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ scale: 1.03 }}
//       whileTap={{ scale: 0.98 }}
//       className="group relative"
//     >
//       <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
      
//       <button
//         onClick={() => {
//           const link = document.createElement('a');
//           link.href = '/documents/Hafza Pervez Resume.pdf';
//           link.download = 'Hafza Pervez Resume.pdf';
//           link.click();
//         }}
//         className="relative flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-medium transition-all duration-300 group-hover:bg-gray-800"
//       >
//         <FiDownload className="text-purple-300 group-hover:text-pink-300 transition-colors" />
//         <span>Download My Resume</span>
//         <FiArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
//       </button>
//     </motion.div>
//   );
// };
// export default DownloadCV;