"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, Server, Shield } from "lucide-react"

export default function Experience() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Expérience Professionnelle
        </motion.h1>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-cyan-500" />

          {[
            {
              period: "2024",
              title: "Stage - Technicien en maintenance informatique",
              company: "Cofat-2024",
              description: "Maintenance et sécurisation des systèmes informatiques, support utilisateur",
              tasks: [
                "Maintenance préventive et corrective des équipements",
                "Support technique aux utilisateurs",
                "Sécurisation des postes de travail",
                "Documentation des procédures",
              ],
              icon: Server,
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              period: "2024",
              title: "Développeur Web Freelance",
              company: "Projets Indépendants",
              description: "Développement de sites web et applications",
              tasks: [
                "Création de sites web responsive",
                "Intégration de systèmes de paiement",
                "Optimisation des performances",
                "Maintenance et mises à jour",
              ],
              icon: Code,
              gradient: "from-purple-500 to-pink-500",
            },
            {
              period: "2023",
              title: "Projet Académique - Sécurité Réseau",
              company: "ESME Sudria",
              description: "Mise en place d'une infrastructure réseau sécurisée",
              tasks: [
                "Configuration de pare-feu",
                "Mise en place de VLAN",
                "Tests de pénétration",
                "Documentation technique",
              ],
              icon: Shield,
              gradient: "from-orange-500 to-red-500",
            },
          ].map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""} mb-12`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
                <div className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.gradient} p-2.5 mb-4`}>
                    <exp.icon className="w-full h-full text-white" />
                  </div>
                  <span className="text-sm text-blue-400">{exp.period}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-1 text-white">{exp.title}</h3>
                  <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#0A0F1C]" />
            </motion.div>
          ))}
        </div>

        {/* Skills Gained */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Compétences Acquises
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Technical",
                skills: ["Maintenance système", "Configuration réseau", "Sécurité informatique", "Support technique"],
                icon: Server,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                category: "Development",
                skills: ["HTML/CSS", "JavaScript", "React", "Node.js"],
                icon: Code,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                category: "Security",
                skills: ["Analyse de risques", "Tests d'intrusion", "Sécurité réseau", "Cryptographie"],
                icon: Shield,
                gradient: "from-orange-500 to-red-500",
              },
              {
                category: "Soft Skills",
                skills: ["Communication", "Travail d'équipe", "Gestion de projet", "Résolution de problèmes"],
                icon: Briefcase,
                gradient: "from-green-500 to-teal-500",
              },
            ].map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${skillSet.gradient} p-2 mb-4`}>
                  <skillSet.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">{skillSet.category}</h3>
                <ul className="space-y-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

