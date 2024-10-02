"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sun,
  Moon,
  Upload,
  CheckCircle,
  Github,
  Linkedin
} from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { toast } from 'react-hot-toast'
import { cn } from '@/lib/utils' // Importing the cn function

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Ruby",
  "Go",
  "Rust",
  "TypeScript",
  "Swift",
  "Kotlin"
]

const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile App Developer",
  "Data Scientist",
  "DevOps Engineer",
  "UI/UX Designer",
  "Product Manager",
  "QA Engineer",
  "Machine Learning Engineer"
]

export default function StudentRegistration() {
  const { theme, setTheme } = useTheme()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [profileLink, setProfileLink] = useState('')
  const [resume, setResume] = useState<File | null>(null)
  const [atsScore, setAtsScore] = useState<number | null>(null)
  const [selectedExam, setSelectedExam] = useState('')
  const [aiConsent, setAiConsent] = useState(false)
  const [jobPreference, setJobPreference] = useState('')
  const [skills, setSkills] = useState<string[]>([])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  }

  const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setResume(file)
      // Simulate AI ATS scoring
      setTimeout(() => {
        const randomScore = Math.floor(Math.random() * 41) + 60 // Random score between 60-100
        setAtsScore(randomScore)
        toast.success('Resume uploaded and analyzed!')
      }, 1500)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log({ name, email, mobile, profileLink, resume, selectedExam, aiConsent, jobPreference, skills })
    toast.success('Registration submitted successfully!')
  }

  return (
    <div className={cn("min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-8 transition-colors duration-300")}>
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div className={cn("flex justify-between items-center mb-8")} variants={fadeIn}>
          <h1 className="text-4xl font-bold">Student Registration</h1>
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

        <motion.form onSubmit={handleSubmit} className="space-y-8" variants={stagger}>
          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profile">LinkedIn or GitHub Profile (Optional)</Label>
                    <div className="relative">
                      <Input 
                        id="profile" 
                        value={profileLink} 
                        onChange={(e) => setProfileLink(e.target.value)}
                        className="pl-10"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        {profileLink.includes('github') ? (
                          <Github className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Linkedin className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-green-600 dark:text-green-400">Resume Upload</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <label htmlFor="resume-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">PDF or DOC (MAX. 5MB)</p>
                    </div>
                    <input id="resume-upload" type="file" className="hidden" onChange={handleResumeUpload} accept=".pdf,.doc,.docx" />
                  </label>
                </div>
                {resume && (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" />
                    <span>{resume.name} uploaded successfully</span>
                  </div>
                )}
                {atsScore !== null && (
                  <div className="space-y-2">
                    <Label>AI ATS Score</Label>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            {atsScore}%
                          </span>
                        </div>
                      </div>
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${atsScore}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      >
                        <Progress value={atsScore} className="h-2 rounded bg-blue-500" />
                      </motion.div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600 dark:text-purple-400">Exam Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="selected-exam">Preferred Exam</Label>
                  <Select onValueChange={setSelectedExam}>
                    <SelectTrigger id="selected-exam">
                      <SelectValue placeholder="Select an exam" />
                    </SelectTrigger>
                    <SelectContent>
                      {programmingLanguages.map(lang => (
                        <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ai-consent" checked={aiConsent} onCheckedChange={setAiConsent} />
                  <Label htmlFor="ai-consent">I consent to AI analysis of my profile and exam performance</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-preference">Job Preference</Label>
                  <Select onValueChange={setJobPreference}>
                    <SelectTrigger id="job-preference">
                      <SelectValue placeholder="Select job role" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobRoles.map(role => (
                        <SelectItem key={role} value={role}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Relevant Skills</Label>
                  <Input 
                    id="skills" 
                    value={skills.join(', ')} 
                    onChange={(e) => setSkills(e.target.value.split(',').map(skill => skill.trim()))} 
                    placeholder="e.g. JavaScript, React, Node.js"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Button type="submit" className="w-full" onClick={handleSubmit}>Submit Registration</Button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  )
}
