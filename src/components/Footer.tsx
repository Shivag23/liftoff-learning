
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              LiftoffLearning
            </h3>
            <p className="text-gray-400 mb-4">
              An early-stage nonprofit working to empower the next generation through equitable STEM education and innovative learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:meritlowrystuart@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('founder')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About the Founder
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('impact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Vision
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Join Our Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Support Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('get-involved')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Partner Schools
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>meritlowrystuart@gmail.com</p>
              <p>Building partnerships nationwide</p>
              <p>Committed to STEM education equity</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for STEM education equity
            <span className="mx-2">•</span>
            © 2024 LiftoffLearning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
