import React from 'react';
import { Book, Briefcase, Code, Brain, Database, PenTool as Tool } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Java', 'Python', 'SQL'],
  Technologies: ['React.js', 'Node.js', 'Spring Boot', 'Express.js', 'Redux'],
  Databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
  Tools: ['Git', 'Docker', 'AWS', 'Jenkins', 'Jira']
};

const categoryIcons = {
  Languages: Brain,
  Technologies: Code,
  Databases: Database,
  Tools: Tool
};

export default function About() {
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

  const itemVariants = {
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
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Book className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <ul className="space-y-6">
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-full before:bg-blue-200">
                      <p className="font-medium text-gray-900">MS in Computer Science</p>
                      <p className="text-blue-600">Saint Louis University</p>
                      <p className="text-sm text-gray-500">2023 - 2025</p>
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-full before:bg-blue-200">
                      <p className="font-medium text-gray-900">BE in Computer Science</p>
                      <p className="text-blue-600">Bharath University</p>
                      <p className="text-sm text-gray-500">2018 - 2022</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Experience</h3>
                  <ul className="space-y-6">
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-full before:bg-blue-200">
                      <p className="font-medium text-gray-900">Software Engineer</p>
                      <p className="text-blue-600">TechNova Solutions</p>
                      <p className="text-sm text-gray-500">2021 - 2022</p>
                    </li>
                    <li className="relative pl-6 before:content-[''] before:absolute before:left-0 before:w-1 before:h-full before:bg-blue-200">
                      <p className="font-medium text-gray-900">Associate Software Engineer</p>
                      <p className="text-blue-600">Accenture</p>
                      <p className="text-sm text-gray-500">2022 - 2023</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, items]) => {
                      const Icon = categoryIcons[category];
                      return (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="flex items-center space-x-2 mb-3">
                            <Icon size={18} className="text-blue-600" />
                            <h4 className="font-medium text-gray-700">{category}</h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {items.map(skill => (
                              <motion.span
                                key={skill}
                                whileHover={{ scale: 1.05 }}
                                className="px-3 py-1 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-sm"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}