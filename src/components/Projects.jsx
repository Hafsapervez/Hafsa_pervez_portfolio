import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';


const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Fake News Detection System",
      description: "Developed a machine learning model combines with RAG that analyzes news content with 92% accuracy in Real Time to identify misinformation. Implemented a React dashboard for real-time analysis and reporting.",
      video: '/Images/project 1/demo.mp4',
      tech: ["Python","React", "FastAPI", "NLP","Jupiter Notebook"],
      codeUrl: "https://github.com/Hafsapervez/AI-Based-Fake-News-Detection-System",
      liveUrl: "#",
      features: [
        "Generative AI + RAG ",
        "Real-time Fake News Alerts",
        "Source credibility scoring"
      ]
    },
    {
      id: 3,
      title: "FoodNow - Online Ordering Platform",
      description: "Created a Responsive food delivery service with order tracking, payment processing, and dynamic cart. Reduced checkout time by 40% through UX optimizations.",
      video: '/Images/project 3/demo1.mp4', 
      tech: ["Stripe API", "React","Tailwind Css","MongoDB","Node.js"],
      codeUrl: "https://github.com/Hafsapervez/food-delivery-app",
      liveUrl: "#",
      features: [
        "Payment Module UI + dynamic Cart",
        "Multi-restaurant support UI",
        "Nutritional information"
      ]
    },
    {
      id: 2,
      title: "TextUtils - Advanced Text Processing Tool",
      description: "Built a comprehensive text manipulation web app with 5 utilities including Text Summary, syntax highlighting, and Reading Time. Optimized performance to handle 10,000+ characters seamlessly.",
      video:'/Images/Project 2/demo.mp4',
      tech: ["React","tailwind Css","java Script"],
      codeUrl: "https://github.com/Hafsapervez/textutils",
      liveUrl: "#",
      features: [
        "Dark/Light mode",
        "Text Summary",
        "Word Count + Reading Time"
      ]
    },
    {
      id: 4,
      title: "NewsMonkey - Personalized News Aggregator",
      description: "Engineered a news curation platform with Multiple News Categories, saving users 30+ minutes daily in news discovery.",
      video:'/Images/project 4/demo.mp4',
      tech: ["React", "News API", "Tailwind CSS"],
      codeUrl: "https://github.com/Hafsapervez/NewsApp",
      liveUrl: "#",
      features: [
        "Personalized news feeds",
        "Multiple Categories",
        "Trend analysis"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-center">
            <span className="text-purple-500">Innovative</span> Projects
          </h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-center">
            Each project represents a unique challenge solved through creative engineering and user-focused design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              project={project}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;