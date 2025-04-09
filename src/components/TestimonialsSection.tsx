
import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Regular Client",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "GlowUp has completely transformed my beauty routine. Their facials are absolutely divine, and their stylists are true artists. I always leave feeling like the best version of myself!",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Bridal Client",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "I trusted GlowUp with my wedding day look, and they exceeded all my expectations. The makeup lasted all day and night, and I've never felt more beautiful. Truly professional service!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "First-time Client",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "As someone new to salon services, I was a bit nervous, but the team at GlowUp made me feel comfortable and gave me a haircut that perfectly suits my style. Will definitely be back!",
      rating: 4
    },
    {
      name: "Jennifer Lee",
      role: "Monthly Subscriber",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      quote: "Their monthly subscription package is the best investment I've made for my self-care routine. The consistent quality and personalized approach keeps me coming back every month.",
      rating: 5
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleTestimonials = testimonials.slice(
    currentSlide * 2,
    currentSlide * 2 + 2
  );

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Discover why our clients love GlowUp Beauty Bar and keep coming back for more.
        </p>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <Card key={index} className="border border-slate-100 shadow-sm">
                <CardHeader className="pb-0">
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-salon-dark/70">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="italic text-salon-dark/80">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index ? 'bg-salon-gold' : 'bg-salon-gold/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {testimonials.length > 2 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-salon-cream transition-colors"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center hover:bg-salon-cream transition-colors"
                aria-label="Next testimonials"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
