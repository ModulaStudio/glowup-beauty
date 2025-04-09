
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Brush, Sparkles, Droplets, Flower, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Hair Styling",
      description: "Expert cuts, colors, and styles that enhance your natural beauty and reflect your personality.",
      icon: Scissors
    },
    {
      title: "Makeup",
      description: "Professional makeup for any occasion, from subtle everyday looks to glamorous event styling.",
      icon: Brush
    },
    {
      title: "Facials",
      description: "Rejuvenating facials that cleanse, exfoliate, and nourish for radiant, healthy skin.",
      icon: Sparkles
    },
    {
      title: "Nail Care",
      description: "Manicures, pedicures, and nail art to keep your hands and feet looking their absolute best.",
      icon: Droplets
    },
    {
      title: "Spa Treatments",
      description: "Relaxing massages and body treatments that relieve tension and promote wellness.",
      icon: Flower
    },
    {
      title: "Special Packages",
      description: "Customized beauty packages for weddings, events, or just treating yourself to a day of luxury.",
      icon: Star
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Discover our wide range of premium beauty services designed to enhance your natural beauty 
          and leave you feeling refreshed and confident.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-salon-pink rounded-full flex items-center justify-center mb-4">
                  <service.icon className="text-salon-mauve" size={24} />
                </div>
                <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-salon-dark/80">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
