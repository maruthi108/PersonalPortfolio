import React from 'react';
import { FileText, Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timeline = [
  {
    year: '2023-2025',
    title: 'MS in Computer Science',
    organization: 'Saint Louis University',
    description: 'Advanced coursework in software engineering, algorithms, and machine learning',
    current: true,
    icon: GraduationCap
  },
  {
    year: '2019-2023',
    title: 'Software Engineer',
    organization: 'Accenture',
    description: 'Full-stack development with Java, React, and microservices architecture',
    icon: Briefcase
  },
  {
    year: '2019',
    title: 'Software Engineer Intern',
    organization: 'Accenture',
    description: 'Web development and database optimization projects',
    icon: Briefcase
  },
  {
    year: '2015-2019',
    title: 'BE in Computer Science',
    organization: 'Bharath Institute of Higher Education and Research',
    description: 'Graduated with distinction, specialized in software development',
    icon: Award
  }
];

// Your CV download link
const CV_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=1f4JtVM2VJE61RTb3msbWCJ4FL-Kw7PkD';

export default function Resume() {
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

  const handleDownload = () => {
    window.open(CV_DOWNLOAD_URL, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex justify-between items-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-800"
          >
            Resume
          </motion.h2>
          <motion.button
            variants={itemVariants}
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? 'pr-12' : 'pl-12'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Icon size={20} className="text-blue-600" />
                        </div>
                        <span className="text-sm font-semibold text-blue-600">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-blue-600 mb-2">{item.organization}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      {item.current && (
                        <span className="inline-block mt-3 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
