import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, Star } from "lucide-react";

const PricingSection = () => {
  const pricingData = [
    {
      day: "Weekday",
      icon: <Calendar className="text-primary" size={24} />,
      slots: [
        { time: "5 PM to 7 PM", price: "₹1300/hr", popular: false },
        { time: "7 PM to 11 PM", price: "₹1500/hr", popular: true },
        { time: "11 PM to 12 AM", price: "₹1500/hr", popular: false },
        { time: "12 AM to 6 AM", price: "₹1100/hr", popular: false }
      ]
    },
    {
      day: "Saturday",
      icon: <Star className="text-sport-orange" size={24} />,
      slots: [
        { time: "1 AM to 10 AM", price: "₹1300/hr", popular: false },
        { time: "10 AM to 5 PM", price: "₹1200/hr", popular: false },
        { time: "5 PM to 1 AM", price: "₹1500/hr", popular: true }
      ]
    },
    {
      day: "Sunday / Public Holiday",
      icon: <Clock className="text-sport-blue" size={24} />,
      slots: [
        { time: "6 AM to 5 PM", price: "₹1400/hr", popular: true },
        { time: "5 PM to 12 AM", price: "₹1500/hr", popular: false },
        { time: "12 AM to 6 AM", price: "₹1100/hr", popular: false }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-turf-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competitive rates for all time slots. Book your preferred time and enjoy premium turf experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((dayData, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-card bg-gradient-card">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  {dayData.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-primary">
                  {dayData.day}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {dayData.slots.map((slot, slotIndex) => (
                  <div key={slotIndex} className="relative">
                    <div className="flex justify-between items-center p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                      <div>
                        <p className="font-medium text-foreground">{slot.time}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">{slot.price}</span>
                        {slot.popular && (
                          <Badge className="bg-sport-orange text-white">Popular</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Advance booking recommended</strong> for weekend prime slots
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-card p-6 rounded-xl border-2 border-primary/20">
            <div className="w-12 h-12 bg-gradient-to-r from-turf-green to-accent rounded-full flex items-center justify-center">
              <Clock className="text-white" size={24} />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-lg text-primary">Flexible Booking</h3>
              <p className="text-muted-foreground">Call us for custom packages and group discounts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;