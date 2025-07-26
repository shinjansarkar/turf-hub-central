import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon regarding your booking inquiry.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-turf-light to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to book your slot? Contact us now for reservations and inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 hover:border-primary transition-colors shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Phone className="text-sport-orange" size={24} />
                  <span>Contact Numbers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-turf-green rounded-full"></div>
                  <a href="tel:+917980498131" className="text-lg font-medium hover:text-primary transition-colors">
                    +91 7980498131
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-turf-green rounded-full"></div>
                  <a href="tel:+918013365965" className="text-lg font-medium hover:text-primary transition-colors">
                    +91 8013365965
                  </a>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  Call us anytime for instant booking and availability check
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <MapPin className="text-sport-orange" size={24} />
                  <span>Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium mb-2">412, Mohiary Rd, Ramrajatala</p>
                <p className="text-lg font-medium mb-4">Howrah, West Bengal 711112</p>
                <Button 
                  variant="outline"
                  onClick={() => window.open(`https://maps.google.com/?q=412,Mohiary Rd,Ramrajatala,Howrah,West Bengal 711112`, '_blank')}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View on Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  <Clock className="text-sport-orange" size={24} />
                  <span>Operating Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">24/7 Available</p>
                  <p className="text-muted-foreground">Open all days of the week</p>
                  <p className="text-sm text-primary font-medium">
                    🎯 Advance booking recommended for weekend slots
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-2 hover:border-primary transition-colors shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-primary">
                <Mail className="text-sport-orange" size={24} />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message (preferred time slot, date, etc.)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-turf-green to-accent hover:from-accent hover:to-turf-green text-white py-3 text-lg font-semibold shadow-button transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;