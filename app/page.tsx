"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const handleDownloadCV = () => {
  const link = document.createElement("a")
  link.href =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mahdi%20Chaabani-lwgLRkWBa9PRSSPXHY916epInnb0Gz.png"
  link.download = "Mahdi_Chaabani_CV.png"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 min-h-screen flex items-center">
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-2xl opacity-30"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border-2 border-blue-500/30 overflow-hidden">
            <motion.img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/317848c9-95dc-4eb2-b5e4-025fea2be0e6.JPG-W369svixHD5BGfLhZ0I9qlEFpgKga9.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hey I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Mahdi</span>
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            I'm a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent relative">
              <span className="absolute inset-0 overflow-hidden whitespace-nowrap animate-typing">
                Cyber Security Student
              </span>
              <span className="invisible">Cyber Security Student</span>
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Passionné par la cybersécurité à l'ESME Sudria, je me spécialise dans la protection des systèmes et des
            données. Solide base en programmation et réseaux, je suis constamment à la recherche de nouveaux défis pour
            approfondir mes connaissances dans ce domaine en constante évolution.
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/mahdi-chaabani-881a94295/" },
              { icon: Mail, href: "mailto:mahdi.chaabani@esme.fr" },
              { icon: Phone, href: "tel:0638049759" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-blue-500/30 flex items-center justify-center text-blue-400 hover:border-blue-400 hover:text-blue-300 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              See My Resume
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

