import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-foreground hover:text-primary transition-colors" style={{ fontFamily: 'Open Sans, sans-serif' }}>arukz</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'text-primary' : ''}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <ThemeToggle />
              <a href="tel:+919597841535" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:arukzhq@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <Link to="/contact" className="btn-primary text-sm py-2 px-6">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center space-x-4 pt-4 border-t border-border">
                <a href="tel:+919597841535" className="text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:arukzhq@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="btn-primary text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;