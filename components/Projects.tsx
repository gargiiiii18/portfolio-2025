'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Brain, ShoppingCart } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Suggestique',
      description: 'AI-powered e-commerce platform with secure user authentication and personalized fashion recommendations. Users receive curated outfit suggestions based on inputs like gender, country, formality, and occasion.',
      tech: ['Next.js', 'Node.js', 'MongoDB Atlas', 'Tailwind CSS', 'Stripe', 'NextAuth', 'TensorFlow', 'FastAPI', 'ChromaDB'],
      github: 'https://github.com/gargiiiii18/Suggestique',
      icon: ShoppingCart,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        'AI-powered recommendation engine',
        'Secure payment integration',
        'Real-time user authentication',
        'Vector-based similarity search'
      ]
    },
    {
      title: 'IPL Auction Game',
      description: 'Simulated IPL-style player auction game with real-time bidding and team management. Features dynamic bidding UI with team budget validations and comprehensive player statistics.',
      tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
      github: 'https://github.com/gargiiiii18/ipl-auction',
      icon: Database,
      gradient: 'from-green-500 to-blue-500',
      features: [
        'Real-time bidding system',
        'Team budget management',
        'Player statistics tracking',
        'Responsive auction interface'
      ]
    },
    {
      title: 'Plant Disease Prediction System',
      description: 'Web-based application using CNN model to detect plant diseases from leaf images. Trained on diverse dataset with high validation accuracy, integrated with Streamlit frontend for instant diagnosis.',
      tech: ['Python', 'TensorFlow', 'Keras', 'Streamlit'],
      github: 'https://github.com/gargiiiii18/plant-disease-prediction',
      icon: Brain,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        'CNN-based disease detection',
        'High accuracy validation',
        'Streamlit web interface',
        'Mobile-ready integration'
      ]
    }
  ]

  const getTechIcon = (tech: string) => {
    if (tech.includes('React') || tech.includes('Next.js')) return <Code className="w-4 h-4" />
    if (tech.includes('MongoDB') || tech.includes('PostgreSQL')) return <Database className="w-4 h-4" />
    if (tech.includes('TensorFlow') || tech.includes('AI')) return <Brain className="w-4 h-4" />
    return <Code className="w-4 h-4" />
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-blue/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-light-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my favorite projects that showcase my skills in full-stack development, 
            AI/ML integration, and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-blue/50 backdrop-blur-sm border border-accent-blue/20 rounded-2xl p-8 hover:border-accent-blue/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Project Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-accent-blue transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent-blue mb-3 uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent-blue mb-3 uppercase tracking-wide">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent-blue/20 text-accent-blue text-xs rounded-full border border-accent-blue/30 hover:bg-accent-blue/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-blue hover:text-light-blue transition-colors duration-300 group/link"
              >
                <Github className="w-5 h-5 mr-2 group-hover/link:scale-110 transition-transform duration-200" />
                <span className="font-medium">View on GitHub</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/gargiiiii18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent-blue hover:bg-light-blue text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/25"
          >
            <Github className="w-5 h-5 mr-2" />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
