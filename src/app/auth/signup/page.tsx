"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Github, Mail } from "lucide-react";
import { auth } from "@/firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Icons = {
  spinner: Loader2,
  gitHub: Github,
  google: Mail, // Using Mail icon as a placeholder for Google
};

export default function Component() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmpassword: "",
  });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputs.email || !inputs.password || !inputs.displayName) return alert("Please fill all fields");
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) return;
      router.push("/");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      alert(error.messsage);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error) alert(error.message);
  }, [error]);


  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-zinc-900 rounded-xl shadow-2xl">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter text-white">
            Create an account
          </h1>
          <p className="text-zinc-400">Enter your details to get started</p>
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Full Name
            </Label>
            <Input
              onChange={handleChangeInput}
              type="displayName"
              name="displayName"
              id="displayName"
              placeholder="John Doe"
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              onChange={handleChangeInput}
              id="email"
              name="email"
              placeholder="m@example.com"
              required
              type="email"
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              onChange={handleChangeInput}
              type="password"
              name="password"
              id="password"
              required
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmpassword" className="text-white">
              Confirm Password
            </Label>
            <Input
              onChange={handleChangeInput}
              id="confirmpassword"
              required
              name="confirmpassword"
              type="confirmpassword"
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:bg-zinc-200"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            disabled={loading}
          >
            {loading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign Up
          </Button>
        </form>
        <div className="flex items-center justify-center space-x-2">
          <div className="bg-zinc-700 h-px flex-grow" />
          <span className="text-zinc-400 text-sm">OR</span>
          <div className="bg-zinc-700 h-px flex-grow" />
        </div>
        <div className="space-y-4">
          <Button
            variant="outline"
            className="w-full bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Sign up with GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
        </div>
        <p className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <a href="#" className="underline text-white hover:text-zinc-200">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
