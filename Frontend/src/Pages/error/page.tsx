"use client"

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Sun, Moon, Code, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function ErrorPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [1, 0.5, 1],
      transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
    })
  }, [controls])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const glitchAnimation = {
    hidden: { opacity: 0, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: [0, -20, 20, -20, 20, 0],
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    })
  }

  const matrixRain = {
    hidden: { opacity: 0, y: -100 },
    visible: (i: number) => ({
      opacity: 1,
      y: 1000,
      transition: {
        delay: i * 0.1,
        duration: 20,
        repeat: Infinity,
        repeatType: "loop"
      }
    })
  }

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-black text-green-400' : 'bg-white text-indigo-600'}`}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl font-mono"
            style={{ left: `${index * 5}%` }}
            variants={matrixRain}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
          </motion.div>
        ))}
      </div>

      <header className="relative z-10 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code className="w-8 h-8" />
          <span className="text-xl font-bold font-neue-machina">HackerHub</span>
        </div>
        <Button variant="outline" onClick={toggleTheme} className={`relative ${isDarkMode ? 'border-green-400 text-green-400' : 'border-indigo-600 text-indigo-600'}`}>
          <Sun className={`w-4 h-4 transition-opacity ${isDarkMode ? 'opacity-0' : 'opacity-100'}`} />
          <Moon className={`w-4 h-4 absolute transition-opacity ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} />
        </Button>
      </header>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4">
        <motion.div
          animate={controls}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-neue-machina">
            {"Glitch in the Matrix".split('').map((char, index) => (
              <motion.span
                key={index}
                variants={glitchAnimation}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {char}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Reality has encountered an unexpected error
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/">
            <Button size="lg" className={`${isDarkMode ? 'bg-green-500 hover:bg-green-600' : 'bg-indigo-500 hover:bg-indigo-600'} text-white font-neue-machina`}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Reboot Reality
            </Button>
          </Link>
        </motion.div>
      </main>

      <footer className="relative z-10 py-4 px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} HackerHub. All realities reserved.
        </p>
      </footer>
    </div>
  )
}