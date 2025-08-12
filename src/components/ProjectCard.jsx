import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, darkMode }) => {
  // Build a unified media list (prefer videos first for initial view)
  const media = useMemo(() => {
    const list = [];
    if (project.mainVideo || project.video)
      list.push({ type: 'video', src: project.mainVideo || project.video, label: 'Demo 1', poster: project.mainImage || project.secondaryImage });
    if (project.secondaryVideo)
      list.push({ type: 'video', src: project.secondaryVideo, label: 'Demo 2', poster: project.secondaryImage || project.mainImage });
    const imgs = (project.images || [project.mainImage, project.secondaryImage]).filter(Boolean);
    imgs.forEach((src, i) => list.push({ type: 'image', src, label: `Shot ${i + 1}` }));
    // Fallback if nothing provided
    if (list.length === 0 && project.mainImage) list.push({ type: 'image', src: project.mainImage, label: 'Preview' });
    return list;
  }, [project]);

  // Pick the first video if present, otherwise first item
  const initialIndex = Math.max(0, media.findIndex(m => m.type === 'video'));
  const [active, setActive] = useState(initialIndex === -1 ? 0 : initialIndex);

  const activeItem = media[active];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className={`rounded-xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      {/* ONE BIG HORIZONTAL FRAME (16:9) */}
      <div className="w-full">
        {/* Keep a dark canvas so widescreen videos look clean; stays within your black/white theme */}
        <div className={`w-full aspect-video ${darkMode ? 'bg-black' : 'bg-black'} flex items-center justify-center`}>
          {activeItem?.type === 'video' ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              controls={false}
              className="h-full w-full object-contain" // contain to avoid cropping desktop capture
              poster={activeItem.poster}
            >
              <source src={activeItem.src} type="video/mp4" />
            </video>
          ) : activeItem ? (
            <img
              src={activeItem.src}
              alt={project.title}
              className="h-full w-full object-contain"
            />
          ) : null}
        </div>

        {/* Minimal media switcher (only if multiple items) */}
        {media.length > 1 && (
          <div className="flex flex-wrap gap-2 p-3">
            {media.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors
                  ${i === active
                    ? (darkMode ? 'bg-purple-600 text-white' : 'bg-purple-500 text-white')
                    : (darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')
                  }`}
                aria-label={`Show ${m.label}`}
              >
                {m.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>

        <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>

        <ul className="mb-4 pl-5 list-disc">
          {project.features.map((feature, i) => (
            <li key={i} className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                darkMode ? 'bg-gray-700 text-purple-300' : 'bg-purple-100 text-purple-800'
              }`}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}
          >
            <FiGithub /> Source Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'
              } text-white transition-colors`}
            >
              <FiExternalLink /> Live Demo(comming soon)
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
