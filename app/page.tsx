import React from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Zap } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/personal/header"

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">

      <Header />
      
      
      <main className="flex-1 pt-20">
        <section id="home" className="w-full py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-8">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl/none max-w-3xl">
                Elevate Your Business with Our Template
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 text-xl md:text-2xl">
                Streamline your workflow, boost productivity, and unlock new possibilities with our cutting-edge solution.
              </p>
              <div className="space-x-4">
                <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg">Get Started</Button>
                <Button variant="outline" className="text-gray-900 border-gray-900 hover:bg-gray-100 px-8 py-3 rounded-full text-lg">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="features" className="w-full py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Zap, title: "Lightning Fast", desc: "Experience unparalleled speed and efficiency." },
                { icon: CheckCircle, title: "Easy Integration", desc: "Seamlessly integrate into your existing workflow." },
                { icon: Code, title: "Customizable", desc: "Tailor our solution to your specific needs." }
              ].map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 mb-4 text-gray-900" />
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section id="about" className="w-full py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">About Us</h2>
            <p className="mx-auto max-w-[800px] text-gray-600 text-xl">
              At Template, were passionate about providing innovative solutions that help businesses thrive. 
              Our team of experts is dedicated to creating cutting-edge templates that streamline your workflow 
              and boost your productivity.
            </p>
          </div>
        </section>

        <section id="contact" className="w-full py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 text-xl">
                Transform your business with Template today. Our team is ready to assist you in harnessing the power of our solution.
              </p>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full text-lg">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2024 Template. All rights reserved.</p>
            <nav className="flex gap-6 mt-4 md:mt-0">
              {["Terms of Service", "Privacy"].map((item) => (
                <Link key={item} className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;