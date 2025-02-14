"use client"

import { motion } from "framer-motion"
import { Github, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Projets
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Système de Détection d'Intrusion",
              description: "Développement d'un IDS basé sur l'analyse de trafic réseau en temps réel",
              technologies: ["Python", "Scapy", "Machine Learning"],
              image: "/placeholder.svg?height=200&width=400",
              github: "#",
              demo: "#",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              title: "Application Web Sécurisée",
              description: "Plateforme web avec authentification forte et gestion des données sensibles",
              technologies: ["Angular", "Node.js", "MongoDB"],
              image: "/placeholder.svg?height=200&width=400",
              github: "#",
              demo: "#",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              title: "Infrastructure Cloud Sécurisée",
              description: "Déploiement d'une infrastructure cloud avec sécurité renforcée",
              technologies: ["AWS", "Terraform", "Docker"],
              image: "/placeholder.svg?height=200&width=400",
              github: "#",
              demo: "#",
              gradient: "from-orange-500 to-red-500",
            },
            {
              title: "Outil d'Audit de Sécurité",
              description: "Application d'audit automatisé des configurations de sécurité",
              technologies: ["Python", "Bash", "REST API"],
              image: "/placeholder.svg?height=200&width=400",
              github: "#",
              demo: "#",
              gradient: "from-green-500 to-teal-500",
            },
            {
              title: "Gestionnaire de Mots de Passe",
              description: "Application sécurisée de gestion des mots de passe",
              technologies: ["React", "Cryptography", "SQLite"],
              image: "/placeholder.svg?height=200&width=400",
              github: "#",
              demo: "#",
              gradient: "from-blue-600 to-blue-800",
            },
            {
              title: "Plateforme de CTF",
              description: "Environnement de challenges de sécurité informatique",
              technologies: ["Vue.js", "Express", "Docker"],
              image: "/placeholder.svg?height=200&width=400",
              github: "#",
              demo: "#",
              gradient: "from-purple-600 to-purple-800",
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#151C2F] rounded-xl overflow-hidden border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-2 text-gray-400 hover:text-white"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

