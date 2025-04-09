
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import BookingDialog from "./BookingDialog";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold text-salon-gold">
          GlowUp
          <span className="text-salon-dark">Beauty</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-sm hover:text-salon-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <BookingDialog 
              trigger={
                <Button 
                  className="bg-salon-gold hover:bg-salon-gold/90 text-white ml-4"
                >
                  Book Now
                </Button>
              } 
            />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-salon-dark"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden animate-fade-in">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-medium text-sm hover:text-salon-gold transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="bg-salon-gold hover:bg-salon-gold/90 text-white mt-2"
              >
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
