"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  Download, 
  RefreshCw, 
  Clock, 
  Code, 
  AlertTriangle, 
  Lightbulb, 
  BarChart, 
  Users,
  Sun,
  Moon
} from 'lucide-react'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "next-themes"

// Mock data for the example
const examResult = {
  overallScore: 85,
  questionBreakdown: [
    { id: 1, score: 90, passedAllTests: true, timeSpent: 15, avgTime: 20 },
    { id: 2, score: 75, passedAllTests: false, timeSpent: 25, avgTime: 20 },
    { id: 3, score: 100, passedAllTests: true, timeSpent: 10, avgTime: 15 },
  ],
  aiFeedback: {
    codeQuality: "Your code is generally well-structured and readable. Consider using more descriptive variable names in some instances.",
    commonMistakes: ["Inefficient use of loops in Question 2", "Missed edge case in Question 1"],
    recommendations: ["Practice more dynamic programming problems", "Focus on time complexity optimization"],
  },
  skillMatrix: {
    'Problem Solving': 85,
    'Data Structures': 90,
    'Algorithms': 80,
    'Code Efficiency': 75,
  },
  ranking: 15,
  totalParticipants: 100,
  averagePeerScore: 72,
}

export default function StudentResultAnalysis() {
  const [activeSection, setActiveSection] = useState('overview')
  const { theme, setTheme } = useTheme()

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-8 transition-colors duration-300`}>
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className="flex justify-between items-center mb-8" variants={fadeIn}>
          <h1 className="text-4xl font-bold">Exam Result Analysis</h1>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-3xl">Overall Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="text-6xl font-bold text-blue-600 dark:text-blue-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {examResult.overallScore}%
                </motion.div>
              </div>
              <motion.div 
                className="mt-4" 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Progress value={examResult.overallScore} className="h-2" />
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <motion.div whileHover={pulse}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600 dark:text-blue-400">
                    <Users className="mr-2" />
                    Ranking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{examResult.ranking} / {examResult.totalParticipants}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={pulse}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600 dark:text-green-400">
                    <BarChart className="mr-2" />
                    Avg. Peer Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{examResult.averagePeerScore}%</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={pulse}>
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-600 dark:text-purple-400">
                    <Clock className="mr-2" />
                    Time Management
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Efficient in 2/3 questions</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Question Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {examResult.questionBreakdown.map((question, index) => (
                  <AccordionItem value={`question-${index}`} key={index}>
                    <AccordionTrigger>
                      Question {question.id} - Score: {question.score}%
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>Passed all tests: {question.passedAllTests ? 'Yes' : 'No'}</p>
                      <p>Time spent: {question.timeSpent} minutes</p>
                      <p>Average time: {question.avgTime} minutes</p>
                      <motion.div 
                        className="mt-2" 
                        initial={{ scaleX: 0 }} 
                        animate={{ scaleX: 1 }} 
                        transition={{ duration: 0.5 }}
                      >
                        <Progress value={question.score} className="h-2" />
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-green-600 dark:text-green-400">
                <Code className="mr-2" />
                AI-Generated Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">Code Quality & Efficiency</h3>
              <p className="mb-4">{examResult.aiFeedback.codeQuality}</p>

              <h3 className="text-xl font-semibold mb-2 text-red-600 dark:text-red-400">Common Mistakes</h3>
              <ul className="list-disc list-inside mb-4">
                {examResult.aiFeedback.commonMistakes.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-yellow-600 dark:text-yellow-400">Recommendations</h3>
              <ul className="list-disc list-inside">
                {examResult.aiFeedback.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-blue-600 dark:text-blue-400">Skill Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(examResult.skillMatrix).map(([skill, score], index) => (
                  <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-lg">{skill}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={score} className="h-2" />
                      <p className="mt-2">{score}%</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </motion.div>
    </div>
  )
}
