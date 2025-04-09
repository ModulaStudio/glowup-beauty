
import React, { useState } from "react";
import { Calendar, CalendarCheck } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface BookingDialogProps {
  trigger: React.ReactNode;
}

const BookingDialog = ({ trigger }: BookingDialogProps) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log("Booking submitted:", formData);
    
    // Show success message
    toast({
      title: "Appointment Booked Successfully!",
      description: `We'll see you on ${formData.date} at ${formData.time}. Thank you for choosing GlowUp Beauty Bar!`,
      duration: 5000,
    });
    
    // Close the dialog
    setOpen(false);
    
    // Reset the form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-salon-gold" />
            Book Your Appointment
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to schedule your beauty treatment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Your phone number"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">
                  Date
                </label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium">
                  Time
                </label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium">
                Service
              </label>
              <select 
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              >
                <option value="" disabled>Select a service</option>
                <option value="haircut">Haircut & Styling</option>
                <option value="coloring">Hair Coloring</option>
                <option value="facial">Facial Treatment</option>
                <option value="makeup">Makeup Application</option>
                <option value="manicure">Manicure & Pedicure</option>
                <option value="massage">Massage Therapy</option>
              </select>
            </div>
          </div>
          
          <DialogFooter className="pt-4">
            <Button type="submit" className="bg-salon-gold hover:bg-salon-gold/90 text-white w-full">
              Book Appointment
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
