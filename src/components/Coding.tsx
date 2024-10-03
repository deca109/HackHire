"use client";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python"; // Import additional languages as needed
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { useState } from "react";
import {vscodeDark} from "@uiw/codemirror-theme-vscode";
import { Button } from "@/components/ui/button"
import { ChevronDown, Maximize2, RotateCcw } from 'lucide-react'

const languageOptions = [
  {
    label: "JavaScript",
    value: "javascript",
    extension: javascript({ jsx: true }),
  },
  { label: "Python", value: "python", extension: python() },
  { label: "Java", value: "java", extension: java() },
  { label: "C++", value: "cpp", extension: cpp() },
];

const Coding = () => {
  const [language, setLanguage] = useState(languageOptions[0]);

  const boilerPlate = `function twoSum(nums: number[], target: number): number[] {
    
};`;
  return (
    <>
      <div className="flex items-center justify-between p-2 bg-zinc-900 border-b border-zinc-800">
      <div className="flex items-center space-x-2">
        <div className="relative inline-block text-left">
          <div>
            <select
              className="appearance-none bg-zinc-800 border border-zinc-700 text-zinc-100 py-2 pl-3 pr-8 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              onChange={(e) => {
                const selectedLanguage = languageOptions.find(
                  (lang) => lang.value === e.target.value
                )
                if (selectedLanguage) {
                  setLanguage(selectedLanguage)
                }
              }}
              value={language.value}
            >
              {languageOptions.map((lang) => (
                <option key={lang.value} value={lang.value} className="bg-zinc-800 text-zinc-100">
                  {lang.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-400">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="bg-zinc-800 border-zinc-700 text-zinc-100 hover:bg-zinc-700 hover:text-zinc-50">
          Auto
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
          <Maximize2 className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
          <RotateCcw className="h-5 w-5" />
        </Button>
      </div>
    </div>
      <CodeMirror
        value={boilerPlate}
        theme={vscodeDark}
        extensions={[language.extension]}
      />
    </>
  );
};

export default Coding;
