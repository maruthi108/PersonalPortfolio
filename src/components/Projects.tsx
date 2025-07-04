import React from 'react';
import { ExternalLink, Github, Star, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce application with microservices architecture, featuring user authentication, product catalog, shopping cart, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
    features: ['User authentication & authorization', 'Product catalog management', 'Shopping cart functionality', 'Payment gateway integration'],
    stats: {
      stars: 156,
      forks: 34,
      users: 4200
    },
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Task Management System',
    description: 'Enterprise-level task management application with real-time collaboration, project tracking, and team management capabilities.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=1200',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'WebSocket', 'Docker'],
    features: ['Real-time collaboration', 'Project timeline tracking', 'Team management', 'File sharing & comments'],
    stats: {
      stars: 128,
      forks: 45,
      users: 2300
    },
    links: {
      github: '#',
      live: '#'
    }
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for data visualization and analytics with real-time data processing and customizable reporting features.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Chart.js', 'Redis'],
    features: ['Real-time data visualization', 'Custom report generation', 'Data export capabilities', 'Interactive charts & graphs'],
    stats: {
      stars: 89,
      forks: 23,
      users: 1500
    },
    links: {
      github: '#',
      live: '#'
    }
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          variants={cardVariants}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star size={16} className="mr-1" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-1" />
                        <span>{project.stats.users}</span>
                      </div>
                      <div className="flex items-center">
                        <Zap size={16} className="mr-1" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-700">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-700">Key Features</h4>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    {project.features.map(feature => (
                      <li key={feature} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
