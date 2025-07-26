import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import turfMainImage from "@/assets/turf-main.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${turfMainImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            TURF
            <span className="bg-gradient-to-r from-turf-green to-sport-orange bg-clip-text text-transparent"> VSA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Premium artificial turf football ground with professional facilities and competitive pricing
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-white">
            <div className="flex items-center space-x-2">
              <MapPin className="text-sport-orange" size={20} />
              <span className="text-sm md:text-base">Ramrajatala, Howrah</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="text-sport-orange" size={20} />
              <span className="text-sm md:text-base">24/7 Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="text-sport-orange" size={20} />
              <span className="text-sm md:text-base">Premium Quality</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-turf-green to-accent hover:from-accent hover:to-turf-green text-white px-8 py-3 text-lg font-semibold shadow-button transition-all duration-300 transform hover:scale-105"
            >
              View Pricing
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;