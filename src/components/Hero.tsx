import React from 'react';
import { Github, Linkedin, Mail, ChevronDown, Code2, Terminal } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/maruthimanoj', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/maruthimanoj', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:maruthimanoj.charapalle@gmail.com', label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"
        />
      </div>

      {/* Floating code icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/6 opacity-20"
      >
        <Code2 size={48} />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 right-1/6 opacity-20"
      >
        <Terminal size={48} />
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Maruthi Manoj Charapalle
            </h1>
            <div className="text-2xl md:text-3xl text-blue-200 font-light">
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'React Specialist',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-12 text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            Passionate software engineer with 4+ years of experience in full-stack development.
            Currently pursuing MS in Computer Science at Saint Louis University,
            specializing in modern web technologies and scalable software solutions.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-8"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-white hover:text-blue-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center space-x-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown size={32} className="text-blue-300" />
        </motion.div>
      </motion.div>
    </div>
  );
}
