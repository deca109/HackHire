"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { AlignJustify, Search, Home, BookOpen, Award, Settings, LogOut } from 'lucide-react'
import { problems } from '@/lib/data'



export default function Component() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-zinc-900 text-zinc-100">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-zinc-800 p-4 transition-transform duration-200 ease-in-out lg:relative lg:translate-x-0`}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-zinc-100">LeetCode</h1>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-zinc-400 hover:text-zinc-100">
            <AlignJustify className="h-6 w-6" />
          </Button>
        </div>
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700">
            <BookOpen className="mr-2 h-4 w-4" />
            Problems
          </Button>
          <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700">
            <Award className="mr-2 h-4 w-4" />
            Contest
          </Button>
          <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
        <div className="absolute bottom-4 left-4">
          <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-zinc-800 shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-zinc-400 hover:text-zinc-100">
              <AlignJustify className="h-6 w-6" />
            </Button>
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-zinc-400" />
                  </div>
                  <Input
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-zinc-600 rounded-md leading-5 bg-zinc-700 text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search problems"
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Problem list */}
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="text-2xl font-bold mb-4 text-zinc-100">Problems</h2>
          <ScrollArea className="h-[calc(100vh-12rem)] rounded-md border border-zinc-700">
            <div className="p-4">
              {problems.map((problem, index) => (
                <div key={problem.id}>
                  <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-zinc-400 w-8">{problem.id}.</span>
                      <a href={problem.link} className="text-blue-400 hover:text-blue-300 ml-2">{problem.title}</a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={problem.difficulty === 'Easy' ? 'secondary' : problem.difficulty === 'Medium' ? 'default' : 'destructive'}>
                        {problem.difficulty}
                      </Badge>
                      <span className="text-sm text-zinc-400">{problem.acceptance}</span>
                      <span className="text-sm text-zinc-400">{problem.frequency}</span>
                    </div>
                  </div>
                  {index < problems.length - 1 && <Separator className="bg-zinc-700" />}
                </div>
              ))}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  )
}