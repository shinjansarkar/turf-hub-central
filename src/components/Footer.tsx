import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sport-orange to-sport-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <h3 className="text-2xl font-bold">TURF VSA</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Premium artificial turf football ground providing world-class facilities for football enthusiasts in Howrah.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                <span className="text-sm">📍</span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sport-orange" />
                <div>
                  <a href="tel:+917980498131" className="hover:text-sport-orange transition-colors">
                    +91 7980498131
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-sport-orange" />
                <div>
                  <a href="tel:+918013365965" className="hover:text-sport-orange transition-colors">
                    +91 8013365965
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-sport-orange mt-1" />
                <div>
                  <p className="text-gray-200">412, Mohiary Rd, Ramrajatala</p>
                  <p className="text-gray-200">Howrah, West Bengal 711112</p>
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="text-xl font-bold mb-4">Operating Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-sport-orange" />
                <div>
                  <p className="font-medium">24/7 Available</p>
                  <p className="text-gray-200 text-sm">All days of the week</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-lg">
                <p className="text-sm text-gray-200">
                  <strong className="text-white">Peak Hours:</strong> 7 PM - 11 PM<br />
                  <strong className="text-white">Best Rates:</strong> 12 AM - 6 AM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            © 2024 TURF VSA. All rights reserved. | Professional Turf Facility in Howrah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;