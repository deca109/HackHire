"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Terminal, Briefcase, Code, Zap, Shield, Users, Trophy, Target, Cpu, Rocket, LogIn } from "lucide-react"
import Link from "next/link"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("developer")
  const [isLogin, setIsLogin] = useState(true)

  const toggleAuth = () => setIsLogin(!isLogin)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-2xl font-bold text-green-400">
            <Terminal className="w-8 h-8 mr-2" />
            HackerHub
          </Link>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="developer" className="flex items-center justify-center text-lg">
              <Code className="w-5 h-5 mr-2" />
              Developer
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center justify-center text-lg">
              <Briefcase className="w-5 h-5 mr-2" />
              Company
            </TabsTrigger>
          </TabsList>
          <TabsContent value="developer">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
              >
                {isLogin ? <DeveloperLogin toggleAuth={toggleAuth} /> : <DeveloperSignUp toggleAuth={toggleAuth} />}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
          <TabsContent value="company">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                transition={{ duration: 0.3 }}
              >
                {isLogin ? <CompanyLogin toggleAuth={toggleAuth} /> : <CompanySignUp toggleAuth={toggleAuth} />}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}

function DeveloperLogin({ toggleAuth  }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Welcome Back, Coder!</h2>
        <Input type="email" placeholder="Email" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="password" placeholder="Password" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
          <Zap className="w-4 h-4 mr-2" />
          Power Up
        </Button>
        <div className="text-center text-sm text-gray-400">
          <Link href="#" className="hover:text-green-400">Forgot Password?</Link>
        </div>
        <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Continue with Google
        </Button>
        <div className="text-center text-sm text-gray-400">
          New to HackerHub?{' '}
          <button onClick={toggleAuth} className="text-green-400 hover:underline">
            Join the coding revolution
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Why Join HackerHub?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
              <span>Compete in exciting coding challenges</span>
            </li>
            <li className="flex items-start">
              <Target className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />
              <span>Sharpen your skills with tailored practice</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
              <span>Connect with a global community of developers</span>
            </li>
            <li className="flex items-start">
              <Zap className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
              <span>Supercharge your career opportunities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function DeveloperSignUp({ toggleAuth }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Join the Coding Elite</h2>
        <Input type="text" placeholder="Full Name" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="email" placeholder="Email" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="password" placeholder="Password" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="password" placeholder="Confirm Password" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Button className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold">
          <Rocket className="w-4 h-4 mr-2" />
          Launch Your Journey
        </Button>
        <div className="text-center text-sm text-gray-400">
          By signing up, you agree to our{' '}
          <Link href="#" className="text-green-400 hover:underline">Terms</Link> and{' '}
          <Link href="#" className="text-green-400 hover:underline">Privacy Policy</Link>
        </div>
        <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Sign up with Google
        </Button>
        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <button onClick={toggleAuth} className="text-green-400 hover:underline">
            Sign in
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-400">Developer Perks</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Trophy className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-1" />
              <span>Participate in exclusive coding competitions</span>
            </li>
            <li className="flex items-start">
              <Target className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />
              <span>Access curated learning paths and resources</span>
            </li>
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
              <span>Network with top developers worldwide</span>
            </li>
            <li className="flex items-start">
              <Zap className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
              <span>Get noticed by leading tech companies</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function CompanyLogin({ toggleAuth }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Welcome Back, Innovators!</h2>
        <Input type="email" placeholder="Corporate Email" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="password" placeholder="Password" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
          <Shield className="w-4 h-4 mr-2" />
          Secure Access
        </Button>
        <div className="text-center text-sm text-gray-400">
          <Link href="#" className="hover:text-blue-400">Forgot Password?</Link>
        </div>
        <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Sign In with Google Workspace
        </Button>
        <div className="text-center text-sm text-gray-400">
          Not registered?{' '}
          <button onClick={toggleAuth} className="text-blue-400 hover:underline">
            Create an account
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Premium Features for Companies</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
              <span>Access to a pool of top-tier tech talent</span>
            </li>
            <li className="flex items-start">
              <Target className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />
              <span>Customized assessment tools for precise hiring</span>
            </li>
            <li className="flex items-start">
              <Shield className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" />
              <span>Secure and compliant hiring processes</span>
            </li>
            <li className="flex items-start">
              <Cpu className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
              <span>AI-powered candidate matching and insights</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function CompanySignUp({ toggleAuth }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">Elevate Your Hiring</h2>
        <Input type="text" placeholder="Company Name" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="text" placeholder="Your Full Name" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="email" placeholder="Corporate Email" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="password" placeholder="Password" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Input type="password" placeholder="Confirm Password" className="w-full bg-gray-800 border-gray-700 text-white" />
        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold">
          <Shield className="w-4 h-4 mr-2" />
          Create Secure Account
        </Button>
        <div className="text-center text-sm text-gray-400">
          By signing up, you agree to our{' '}
          <Link href="#" className="text-blue-400 hover:underline">Terms</Link> and{' '}
          <Link href="#" className="text-blue-400 hover:underline">Privacy Policy</Link>
        </div>
        <Button variant="outline" className="w-full border-gray-700 text-white hover:bg-gray-800">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
          </svg>
          Sign up with Google Workspace
        </Button>
        <div className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <button onClick={toggleAuth} className="text-blue-400 hover:underline">
            Sign in
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-blue-500">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Company Benefits</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Users className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
              <span>Access to a curated pool of top-tier developers</span>
            </li>
            <li className="flex items-start">
              <Target className="w-5 h-5 mr-2 text-red-400 flex-shrink-0 mt-1" />
              <span>Advanced filtering and matching algorithms</span>
            </li>
            <li className="flex items-start">
              <Shield className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" />
              <span>Secure and compliant hiring processes</span>
            </li>
            <li className="flex items-start">
              <Cpu className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" />
              <span>AI-powered insights for better hiring decisions</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}