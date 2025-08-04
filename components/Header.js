import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold text-white">YourBrand</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white px-4 py-2 text-lg font-medium transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white px-4 py-2 text-lg font-medium transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white px-4 py-2 text-lg font-medium transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white px-4 py-2 text-lg font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white px-4 py-2 text-lg font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 text-lg font-bold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              <a href="#features" className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium">
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-gray-800">
                <button className="text-gray-300 hover:text-white block px-3 py-3 text-lg font-medium w-full text-left">
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-3 py-3 text-lg font-bold hover:bg-blue-700 transition-colors w-full mt-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;