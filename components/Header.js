import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">YourBrand</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              <a href="#features" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <button className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left">
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors w-full mt-2">
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