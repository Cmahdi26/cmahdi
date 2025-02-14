"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Book } from "lucide-react"

export default function Education() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        Formation
      </motion.h1>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 to-cyan-500" />

        {[
          {
            year: "2023 - 2026",
            title: "Bachelor en Cybersécurité",
            school: "ESME Sudria",
            description: "Formation approfondie en sécurité informatique, programmation et réseaux",
            icon: GraduationCap,
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            year: "2024 - 2025",
            title: "Semestre a l'etranger ",
            school: "Fesb university",
            description: "Spécialisation en solutions d'infrastructure, systèmes et réseaux",
            icon: Book,
            gradient: "from-purple-500 to-pink-500",
          },
          {
            year: "2023",
            title: "Baccalauréat scientifique",
            school: "Lycée Zahrouni",
            description: "Bac informatique",
            icon: Award,
            gradient: "from-orange-500 to-red-500",
          },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""} mb-12`}
          >
            <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8"}`}>
              <div className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} p-2.5 mb-4`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <span className="text-sm text-blue-400">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2 mb-1 text-white">{item.title}</h3>
                <p className="text-gray-400 font-medium mb-2">{item.school}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-[#0A0F1C]" />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

