'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Trophy, Music, Users, Calendar } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      title: 'BTech in Computer Science & Engineering',
      subtitle: 'Dwarkadas J. Sanghvi College of Engineering',
      period: 'Nov 2022 - Present',
      details: [
        'Specialization: IoT, Cybersecurity, Blockchain',
        'CGPA: 9.35/10',
        'Honours Degree in Smart Computing',
        'Focus on advanced computation and data-driven systems'
      ],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'HSC (Science)',
      subtitle: 'K. C. College',
      period: '2020 - 2022',
      details: [
        'Score: 76.67%',
        'Science stream with focus on Mathematics and Physics'
      ],
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SSC',
      subtitle: 'Girton High School',
      period: '2009 - 2020',
      details: [
        'Score: 94.20%',
        'Foundation in core subjects'
      ],
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const activities = [
    {
      title: 'Frontend Mentee',
      organization: 'DJS Buildspace',
      period: 'Oct 2023 - Aug 2024',
      description: 'Gained mentorship in frontend development practices and contributed to team projects',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Participant',
      organization: 'MumbaiHacks 2024',
      period: 'Oct 2024',
      description: 'Collaborated in a 24-hour hackathon to design and prototype innovative tech solutions',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Participant',
      organization: 'Smart India Hackathon (SIH) 2024',
      period: 'Sept 2024',
      description: 'Worked on real-world problem statements with a focus on scalable and impactful solutions',
      icon: Trophy,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Artist',
      organization: 'DJS Beats',
      period: 'Nov 2023 - Aug 2024',
      description: 'Performed and contributed to cultural events as part of the college music committee',
      icon: Music,
      color: 'from-pink-500 to-rose-500'
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-blue/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-light-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My educational background and extracurricular activities that have shaped my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <GraduationCap className="w-8 h-8 mr-3 text-accent-blue" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-blue/50 backdrop-blur-sm border border-accent-blue/20 rounded-xl p-6 hover:border-accent-blue/40 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${edu.color} mr-4 flex-shrink-0`}>
                      <edu.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {edu.title}
                      </h4>
                      <p className="text-accent-blue font-medium mb-2">
                        {edu.subtitle}
                      </p>
                      <p className="text-gray-400 text-sm mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </p>
                      <ul className="space-y-1">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Activities & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Briefcase className="w-8 h-8 mr-3 text-accent-blue" />
              Activities & Experience
            </h3>
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-blue/50 backdrop-blur-sm border border-accent-blue/20 rounded-xl p-6 hover:border-accent-blue/40 transition-all duration-300"
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${activity.color} mr-4 flex-shrink-0`}>
                      <activity.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-accent-blue font-medium mb-2">
                        {activity.organization}
                      </p>
                      <p className="text-gray-400 text-sm mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {activity.period}
                      </p>
                      <p className="text-gray-300 text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-accent-blue/10 to-light-blue/10 rounded-2xl p-8 border border-accent-blue/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on interesting projects. 
              Let's discuss how we can work together to build something amazing!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-accent-blue hover:bg-light-blue text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-accent-blue/25"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
