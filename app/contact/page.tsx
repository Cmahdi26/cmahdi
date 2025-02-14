"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] pt-20">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Contact
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30">
              <h2 className="text-2xl font-semibold mb-6 text-white">Informations de Contact</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "mahdi.chaabani@esme.fr",
                    href: "mailto:mahdi.chaabani@esme.fr",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Phone,
                    label: "Téléphone",
                    value: "06 38 04 97 59",
                    href: "tel:0638049759",
                    gradient: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: MapPin,
                    label: "Adresse",
                    value: "4 rue des pichets",
                    href: "#",
                    gradient: "from-orange-500 to-red-500",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "Voir le profil",
                    href: "https://www.linkedin.com/in/mahdi-chaabani-881a94295/",
                    gradient: "from-blue-600 to-blue-800",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "LinkedIn" ? "_blank" : "_self"}
                    rel={item.label === "LinkedIn" ? "noopener noreferrer" : ""}
                    className="flex items-center gap-4 p-4 rounded-lg bg-[#1A2333] hover:bg-[#1F2937] transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.gradient} p-2`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cinematic Network Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#151C2F] rounded-xl overflow-hidden border border-blue-900/30"
          >
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="Cinematic Cybersecurity Visualization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 mix-blend-overlay" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center px-4">Securing Your Digital Future</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

