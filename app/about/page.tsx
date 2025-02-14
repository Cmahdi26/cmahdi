"use client"

import { motion } from "framer-motion"
import { Book, Brain, Code, Heart, Shield, Server, Wifi } from "lucide-react"
import { useEffect, useRef } from "react"

const NetworkAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const nodes: { x: number; y: number; vx: number; vy: number }[] = []
    const numNodes = 20

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw and update nodes
      ctx.fillStyle = "#3B82F6"
      nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2)
        ctx.fill()

        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full rounded-xl" />
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        À Propos de Moi
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Personal Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30">
            <h2 className="text-2xl font-semibold mb-4 text-white">Qui suis-je ?</h2>
            <p className="text-gray-400 leading-relaxed">
              Je suis un étudiant passionné en cybersécurité, actuellement en formation à l'ESME Sudria. Mon parcours
              est guidé par une curiosité insatiable pour les technologies de sécurité informatique et une volonté
              constante d'apprendre et de me perfectionner dans ce domaine en constante évolution.
            </p>
          </div>

          <div className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30">
            <h2 className="text-2xl font-semibold mb-4 text-white">Mes Objectifs</h2>
            <p className="text-gray-400 leading-relaxed">
              Mon objectif est de devenir un expert en cybersécurité, capable de protéger les systèmes et les données
              contre les menaces émergentes. Je souhaite contribuer à rendre le monde numérique plus sûr en combinant
              expertise technique et conscience éthique.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Key Points */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            {
              icon: Brain,
              title: "Apprentissage Continu",
              description: "Toujours à la recherche de nouvelles connaissances et compétences",
              gradient: "from-blue-500 to-cyan-500",
            },
            {
              icon: Code,
              title: "Passion Technique",
              description: "Fasciné par la programmation et la sécurité informatique",
              gradient: "from-purple-500 to-pink-500",
            },
            {
              icon: Heart,
              title: "Engagement",
              description: "Dévoué à la protection des systèmes et des données",
              gradient: "from-orange-500 to-red-500",
            },
            {
              icon: Book,
              title: "Formation",
              description: "En constante formation sur les dernières technologies",
              gradient: "from-green-500 to-teal-500",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-[#151C2F] rounded-xl p-6 border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} p-2.5 mb-4`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Network Security and Infrastructure Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 bg-[#151C2F] rounded-xl p-8 border border-blue-900/30"
      >
        <h2 className="text-2xl font-semibold mb-6 text-white">Sécurité Réseau et Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Protection</h3>
            </div>
            <p className="text-gray-400">Mise en place de systèmes de défense robustes contre les cybermenaces.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Server className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Infrastructure</h3>
            </div>
            <p className="text-gray-400">
              Conception et maintenance d'infrastructures réseau sécurisées et évolutives.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Wifi className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Connectivité</h3>
            </div>
            <p className="text-gray-400">
              Assurer une connectivité sûre et fiable pour tous les systèmes et utilisateurs.
            </p>
          </div>
        </div>
        <div className="mt-8 h-64">
          <NetworkAnimation />
        </div>
      </motion.div>
    </div>
  )
}

