
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, CalendarDays } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically handle the form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-salon-cream py-20">
      <div className="section-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions or ready to book an appointment? Get in touch with us.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="border-salon-mauve/30 focus:border-salon-mauve"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="border-salon-mauve/30 focus:border-salon-mauve"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                    Phone
                  </label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="border-salon-mauve/30 focus:border-salon-mauve"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="min-h-[120px] border-salon-mauve/30 focus:border-salon-mauve"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-salon-gold hover:bg-salon-gold/90 text-white w-full"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif mb-6">Visit Our Salon</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-salon-pink flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-salon-mauve" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Address</h4>
                  <p className="text-salon-dark/80">
                    123 Beauty Lane, Suite 200<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-salon-pink flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-salon-mauve" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-salon-dark/80">
                    (212) 555-1234<br />
                    (800) GLOW-UP1
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-salon-pink flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-salon-mauve" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-salon-dark/80">
                    info@glowupbeauty.com<br />
                    bookings@glowupbeauty.com
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-salon-pink flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-salon-mauve" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Hours</h4>
                  <div className="grid grid-cols-2 gap-x-4 text-salon-dark/80">
                    <p>Monday - Friday:</p>
                    <p>9:00 AM - 8:00 PM</p>
                    <p>Saturday:</p>
                    <p>10:00 AM - 6:00 PM</p>
                    <p>Sunday:</p>
                    <p>11:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  className="bg-salon-gold hover:bg-salon-gold/90 text-white w-full flex items-center justify-center gap-2"
                >
                  <CalendarDays size={18} />
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
