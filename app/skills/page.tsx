"use client"

import { motion } from "framer-motion"
import { Code, Database, Lock, Server, Shield, Terminal, Wifi, Zap } from "lucide-react"
import NetworkVisualization from "@/components/NetworkVisualization"

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Compétences Techniques
        </motion.h1>

        <div className="grid gap-8">
          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Développement",
                skills: ["HTML/CSS", "JavaScript", "Angular", "React", "Node.js", "Spring Boot"],
                icon: Code,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                category: "Sécurité",
                skills: ["Pentesting", "Cryptographie", "Analyse de risques", "Sécurité réseau", "Forensics", "SIEM"],
                icon: Shield,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                category: "Systèmes",
                skills: ["Linux", "Windows Server", "Virtualisation", "Docker", "Active Directory", "Shell scripting"],
                icon: Terminal,
                gradient: "from-orange-500 to-red-500",
              },
              {
                category: "Réseaux",
                skills: ["TCP/IP", "VLANs", "Routage", "Switching", "Firewalls", "VPN"],
                icon: Wifi,
                gradient: "from-green-500 to-teal-500",
              },
            ].map((domain, index) => (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${domain.gradient} p-2.5 mb-4`}>
                  <domain.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-white">{domain.category}</h3>
                <ul className="space-y-2">
                  {domain.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Specialized Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30"
            >
              <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Spécialisations
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    title: "Sécurité Offensive",
                    skills: ["Tests d'intrusion", "Analyse de vulnérabilités", "Exploitation"],
                    icon: Lock,
                    gradient: "from-red-500 to-orange-500",
                  },
                  {
                    title: "Infrastructure",
                    skills: ["Cloud (AWS)", "Conteneurisation", "Automatisation"],
                    icon: Server,
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    title: "Base de données",
                    skills: ["SQL", "MongoDB", "Administration"],
                    icon: Database,
                    gradient: "from-green-500 to-teal-500",
                  },
                  {
                    title: "DevSecOps",
                    skills: ["CI/CD", "Tests automatisés", "Sécurité intégrée"],
                    icon: Zap,
                    gradient: "from-purple-500 to-pink-500",
                  },
                ].map((spec, index) => (
                  <motion.div
                    key={spec.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="space-y-4"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${spec.gradient} p-2`}>
                      <spec.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{spec.title}</h3>
                    <ul className="space-y-2">
                      {spec.skills.map((skill, skillIndex) => (
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

            {/* Network Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#151C2F] rounded-xl border border-blue-900/30 overflow-hidden"
            >
              <div className="h-full">
                <NetworkVisualization />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

