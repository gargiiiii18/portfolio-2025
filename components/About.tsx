'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Palette, Users } from 'lucide-react'

const About = () => {
  const interests = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building end-to-end web applications with modern frameworks'
    },
    {
      icon: Brain,
      title: 'AI/ML Integration',
      description: 'Implementing machine learning models in real-world applications'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user experiences'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working in teams to deliver impactful solutions'
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-light-blue mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              My Journey in Tech
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate full-stack developer currently pursuing my BTech in Computer Science 
              & Engineering with a focus on IoT, Cybersecurity, and Blockchain at Dwarkadas J. 
              Sanghvi College of Engineering.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My journey in technology began with a curiosity about how things work behind the scenes. 
              This led me to explore everything from frontend frameworks to machine learning algorithms, 
              always seeking to bridge the gap between complex technology and user-friendly experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, participating 
              in hackathons, or performing with DJS Beats, the college music committee. I believe 
              that diverse experiences make better developers.
            </p>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-deep-blue/50 backdrop-blur-sm border border-accent-blue/20 rounded-xl p-6 hover:border-accent-blue/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-accent-blue/20 rounded-lg mr-4">
                    <interest.icon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {interest.title}
                  </h4>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">9.35</div>
            <div className="text-gray-400">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">3+</div>
            <div className="text-gray-400">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">2</div>
            <div className="text-gray-400">Hackathons</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-blue mb-2">∞</div>
            <div className="text-gray-400">Learning</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
