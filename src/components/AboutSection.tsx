
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="bg-salon-cream py-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="GlowUp Beauty Salon Interior" 
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div 
              className="absolute -bottom-6 -right-6 w-72 h-72 border-4 border-salon-gold rounded-lg z-0"
              aria-hidden="true"
            ></div>
          </div>
          
          <div>
            <h2 className="section-title text-left">About GlowUp Beauty Bar</h2>
            <p className="mb-6 text-lg">
              GlowUp Beauty Bar was founded in 2013 with a simple mission: to help everyone 
              discover and enhance their natural beauty. We believe that beauty is not about 
              conforming to standards, but about feeling confident and comfortable in your own skin.
            </p>
            
            <p className="mb-6 text-lg">
              Our team of experienced stylists and beauty experts are passionate about their craft 
              and committed to providing personalized services that meet your unique needs and preferences.
            </p>
            
            <p className="mb-8 text-lg">
              Using only premium products and the latest techniques, we ensure that every client 
              leaves our salon feeling refreshed, rejuvenated, and radiantly beautiful.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-salon-gold"></div>
                <div>
                  <p className="font-bold">Premium Products</p>
                  <p className="text-sm text-salon-dark/70">Luxury brands only</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-salon-gold"></div>
                <div>
                  <p className="font-bold">Expert Stylists</p>
                  <p className="text-sm text-salon-dark/70">Certified professionals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-salon-gold"></div>
                <div>
                  <p className="font-bold">Relaxing Environment</p>
                  <p className="text-sm text-salon-dark/70">Designed for comfort</p>
                </div>
              </div>
            </div>
            
            {/* <Button 
              className="bg-salon-gold hover:bg-salon-gold/90 text-white mt-8"
            >
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
