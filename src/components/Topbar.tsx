'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, Play, CloudUpload } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Timer from './Timer';
import { useParams } from "next/navigation";
import { problems } from '@/lib/data';

const Topbar = () => {
  const { pid } = useParams(); // use useParams instead of router.query

  // Find the problem based on the pid
  const problem = problems.find((p) => p.link.includes(pid));

  if (!problem) {
    return <div>Problem not found</div>;
  }

  return (
    <div className="flex items-center justify-between p-4 bg-zinc-800 border-b border-zinc-700 text-white">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold">{problem.title}</h1>
        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-100">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex-grow flex justify-center"> {/* Centering the button container */}
        <div className="flex space-x-2"> {/* Flexbox for buttons */}
          <Button variant="default">
            <Play className="size-4" />Run
          </Button>
          <Button variant="default" className="bg-green-600 hover:bg-green-800">
            <CloudUpload className="size-4" />Submit
          </Button>
        </div>
      </div>
      <Timer />
    </div>
  );
}

export default Topbar;
