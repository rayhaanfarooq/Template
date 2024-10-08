import Link from "next/link"
import { Cpu } from "lucide-react"


export const Header = () => {
    return (

        <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 h-20 flex items-center bg-white bg-opacity-80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Cpu className="h-8 w-8 mr-3 text-gray-900" />
            <span className="font-bold text-2xl tracking-tight">Template</span>
          </Link>

          
          <nav className="flex gap-8">

          <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href={`/`}>
                Home
              </Link>

              <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href={`/pricing`}>
                Pricing
              </Link>

              <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href={`/dashboard`}>
                Dashboard
              </Link>


              <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href={`/auth/sign-in`}>
                Sign In
              </Link>

              <Link className="text-sm font-medium hover:text-gray-600 transition-colors" href={`/auth/sign-up`}>
                Sign Up
              </Link>
          
          </nav>
        </div>
      </header>

    )
}