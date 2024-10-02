"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Code,
  Sun,
  Moon,
  Send,
  Eye,
  Brain,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { toast } from "react-hot-toast";

const difficultyOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const examTypeOptions = [
  { value: "coding-only", label: "Coding-only Exam" },
  { value: "mcq-coding", label: "MCQs + Coding" },
  { value: "problem-solving-coding", label: "Problem-solving + Coding" },
];

const languageOptions = [
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
];

const scoringOptions = [
  { value: "code-quality", label: "Code Quality" },
  { value: "speed", label: "Speed" },
  { value: "efficiency", label: "Efficiency" },
  { value: "problem-solving", label: "Problem Solving" },
];

const RecruiterExamSettingsPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [examTitle, setExamTitle] = useState<string>("");
  const [examOverview, setExamOverview] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [examType, setExamType] = useState<string>("");
  const [questionCount, setQuestionCount] = useState<number>(5);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [timeLimit, setTimeLimit] = useState<number>(60);
  const [aiQuestionGeneration, setAiQuestionGeneration] = useState<boolean>(false);
  const [aiMonitoring, setAiMonitoring] = useState<boolean>(false);
  const [atsScoreThreshold, setAtsScoreThreshold] = useState<number>(70);
  const [selectedScoringOptions, setSelectedScoringOptions] = useState<string[]>([]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Exam settings saved successfully!");
  };

  const toggleLanguage = (value: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(value)
        ? prev.filter((lang) => lang !== value)
        : [...prev, value]
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "dark bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <header className="py-4 px-6 flex justify-between items-center bg-opacity-90 backdrop-blur-md fixed w-full z-10 shadow-md">
        <div className="flex items-center space-x-2">
          <Code className={`w-8 h-8 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
          <span className="text-xl font-bold font-sans">HackerHub</span>
        </div>
        <Button variant="outline" onClick={toggleTheme} className="relative">
          <Sun className={`w-4 h-4 transition-opacity ${isDarkMode ? "opacity-0" : "opacity-100"}`} />
          <Moon className={`w-4 h-4 absolute transition-opacity ${isDarkMode ? "opacity-100" : "opacity-0"}`} />
        </Button>
      </header>

      <main className="container mx-auto px-4 py-20">
        <motion.h1
          className="text-3xl font-bold mb-8 font-sans text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recruiter Exam Settings
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Exam Title Input */}
          <div className="space-y-2">
            <label htmlFor="examTitle" className="block font-medium">
              Exam Title
            </label>
            <Input
              id="examTitle"
              value={examTitle}
              onChange={(e) => setExamTitle(e.target.value)}
              placeholder="Enter exam title"
              className="w-full"
            />
          </div>

          {/* Exam Overview Input */}
          <div className="space-y-2">
            <label htmlFor="examOverview" className="block font-medium">
              Exam Overview
            </label>
            <Textarea
              id="examOverview"
              value={examOverview}
              onChange={(e) => setExamOverview(e.target.value)}
              placeholder="Provide a brief description of the exam"
              className="w-full"
            />
          </div>

          {/* Difficulty Level and Exam Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Difficulty Level */}
            <div className="space-y-2">
              <label className="block font-medium">Difficulty Level</label>
              <Select onValueChange={setDifficulty} value={difficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficultyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Exam Type */}
            <div className="space-y-2">
              <label className="block font-medium">Exam Type</label>
              <Select onValueChange={setExamType} value={examType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select exam type" />
                </SelectTrigger>
                <SelectContent>
                  {examTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Number of Questions */}
          <div className="space-y-2">
            <label htmlFor="questionCount" className="block font-medium">
              Number of Questions
            </label>
            <Input
              id="questionCount"
              type="number"
              value={questionCount}
              onChange={(e) => setQuestionCount(parseInt(e.target.value) || 1)}
              min={1}
              className="w-full"
            />
          </div>

          {/* Programming Languages */}
          <div className="space-y-2">
            <label className="block font-medium">Programming Languages</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {selectedLanguages.length > 0
                    ? `${selectedLanguages.length} selected`
                    : "Select languages"}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {languageOptions.map((language) => (
                      <CommandItem
                        key={language.value}
                        onSelect={() => toggleLanguage(language.value)}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            selectedLanguages.includes(language.value)
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        {language.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Limit */}
          <div className="space-y-2">
            <label className="block font-medium">Time Limit (minutes)</label>
            <Slider
              min={15}
              max={180}
              value={[timeLimit]}
              onValueChange={(val) => setTimeLimit(val[0])}
            />
            <div>{timeLimit} minutes</div>
          </div>

          {/* AI Options */}
          <div className="space-y-2">
            <label className="block font-medium">AI Question Generation</label>
            <Switch
              checked={aiQuestionGeneration}
              onCheckedChange={setAiQuestionGeneration}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">AI Monitoring</label>
            <Switch checked={aiMonitoring} onCheckedChange={setAiMonitoring} />
          </div>

          {/* ATS Score Threshold */}
          <div className="space-y-2">
            <label htmlFor="atsScoreThreshold" className="block font-medium">
              ATS Score Threshold
            </label>
            <Input
              id="atsScoreThreshold"
              type="number"
              value={atsScoreThreshold}
              onChange={(e) =>
                setAtsScoreThreshold(parseInt(e.target.value) || 70)
              }
              min={0}
              max={100}
              className="w-full"
            />
          </div>

          {/* Scoring Preferences */}
          <div className="space-y-2">
            <label className="block font-medium">Scoring Preferences</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  {selectedScoringOptions.length > 0
                    ? `${selectedScoringOptions.length} selected`
                    : "Select scoring criteria"}
                  <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search criteria..." />
                  <CommandEmpty>No criteria found.</CommandEmpty>
                  <CommandGroup>
                    {scoringOptions.map((option) => (
                      <CommandItem
                        key={option.value}
                        onSelect={() => {
                          setSelectedScoringOptions((prev) =>
                            prev.includes(option.value)
                              ? prev.filter((opt) => opt !== option.value)
                              : [...prev, option.value]
                          );
                        }}
                      >
                        <Check
                          className={`mr-2 h-4 w-4 ${
                            selectedScoringOptions.includes(option.value)
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Save Exam Settings
          </Button>
        </motion.form>
      </main>
    </div>
  );
};

export default RecruiterExamSettingsPage;
