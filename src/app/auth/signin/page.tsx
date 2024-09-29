"use client"
import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Github, Mail } from "lucide-react"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase'
import { toast } from "react-toastify";
import { useRouter } from 'next/navigation'

const Icons = {
  spinner: Loader2,
  gitHub: Github,
  google: Mail, // Using Mail icon as a placeholder for Google
}

export default function Component() {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};


	const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputs.email || !inputs.password) return alert("Please fill all fields");
		try {
			const newUser = await signInWithEmailAndPassword(inputs.email, inputs.password);
			if (!newUser) return;
			router.push("/problems");
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
		}
	};

  useEffect(() => {
		if (error) toast.error(error.message, { position: "top-center", autoClose: 3000, theme: "dark" });
	}, [error]);
  


  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-zinc-900 rounded-xl shadow-2xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-white">Welcome back</h1>
          <p className="text-zinc-400">Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
            onChange={handleInputChange}
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              name='email'
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
            onChange={handleInputChange}
              id="password"
              required
              type="password"
              name='password'
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <Button className="w-full bg-white text-black hover:bg-zinc-200" disabled={loading}>
            {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In
          </Button>
        </form>
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-zinc-700 h-px flex-grow" />
          <span className="text-zinc-400 text-sm">OR</span>
          <div className="bg-zinc-700 h-px flex-grow" />
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Continue with GitHub
          </Button>
          <Button variant="outline" className="w-full bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700">
            <Icons.google className="mr-2 h-4 w-4" />
            Continue with Google
          </Button>
        </div>
        <p className="text-center text-sm text-zinc-400">
          Don&apos;t have an account?{' '}
          <a href="#" className="underline text-white hover:text-zinc-200">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}