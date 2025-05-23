
import { Button } from "@/components/ui/button";
import BookingDialog from "./BookingDialog";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-salon-cream"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "100px"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover Your <span className="text-salon-gold">Natural Beauty</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-salon-dark/80">
            Experience the finest beauty treatments and services at our luxury salon. 
            We help you look and feel your absolute best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookingDialog 
              trigger={
                <Button 
                  className="bg-salon-gold hover:bg-salon-gold/90 text-white px-8 py-6 text-lg"
                >
                  Book Appointment
                </Button>
              } 
            />
            <a href="#services">
              <Button 
                variant="outline" 
                className="border-salon-gold text-salon-dark hover:bg-salon-gold/10 px-8 py-6 text-lg"
              >
                Explore Services
              </Button>
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-salon-gold">10+</p>
              <p className="text-sm text-salon-dark/80">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-salon-gold">50+</p>
              <p className="text-sm text-salon-dark/80">Expert Stylists</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-salon-gold">5000+</p>
              <p className="text-sm text-salon-dark/80">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
