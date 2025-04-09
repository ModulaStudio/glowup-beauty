
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-salon-dark text-white">
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-salon-gold">GlowUp Beauty</h3>
            <p className="mb-6 text-white/80">
              Experience luxury beauty services that enhance your natural beauty and 
              help you feel confident and radiant.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salon-gold transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-salon-gold transition-colors">Home</a></li>
              <li><a href="#services" className="text-white/80 hover:text-salon-gold transition-colors">Services</a></li>
              <li><a href="#about" className="text-white/80 hover:text-salon-gold transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-salon-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-salon-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-salon-gold transition-colors">Hair Styling</a></li>
              <li><a href="#" className="text-white/80 hover:text-salon-gold transition-colors">Makeup</a></li>
              <li><a href="#" className="text-white/80 hover:text-salon-gold transition-colors">Facials</a></li>
              <li><a href="#" className="text-white/80 hover:text-salon-gold transition-colors">Nail Care</a></li>
              <li><a href="#" className="text-white/80 hover:text-salon-gold transition-colors">Spa Treatments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Newsletter</h4>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter for beauty tips, promotions, and salon news.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 text-salon-dark rounded-l-md w-full"
              />
              <Button 
                className="bg-salon-gold hover:bg-salon-gold/90 text-white rounded-l-none"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} GlowUp Beauty Bar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
