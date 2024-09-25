"use client"
import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Mail, Lock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/personal/header"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "@/hooks/auth"


const SignInPage = () => {

  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSignIn = () => {
    doSignInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
        router.push("/dashboard")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleGoogleAuth = () => {
    doSignInWithGoogle()
      .then((result) => {
        console.log(result)
        router.push("/dashboard")
      })
      .catch((error) => {
        console.log(error)
      })
  }




  return (
    <div className="flex min-h-screen bg-gray-100">
        <Header />
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md bg-white bg-opacity-80 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Cpu className="h-12 w-12 text-gray-900" />
            </div>
            <CardTitle className="text-3xl font-bold">Sign in to Template</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="pl-10 w-full"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-10 w-full"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link href="#" className="font-medium text-gray-700 hover:text-gray-900">
                    Forgot your password?
                  </Link>
                </div> */}
              </div>
              <div>
                <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800 flex items-center justify-center"
                 onClick={handleSignIn}
                
                >
                  Sign in
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 flex items-center justify-center"
                  onClick={handleGoogleAuth}
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  Sign in with Google
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <p className="mt-8 text-center text-sm text-gray-600">
          Not a member?{' '}
          <Link href="/auth/sign-up" className="font-medium text-gray-900 hover:text-gray-700">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;