import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Empowering 
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> STEM Education</span> 
              for All
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in">
              Liftoff Learning is an early-stage organization. We are working to bring hands-on STEM learning opportunities
              to underserved schools. We're building partnerships and developing our first learning resources to foster
              the next generation of innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg px-8 py-3"
              >
                Learn Our Mission
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('get-involved')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-lg px-8 py-3"
              >
                Get Involved
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop&crop=center" 
                alt="Students learning STEM" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Building Our Future</h3>
                <p className="text-gray-600">Developing STEM resources for underserved communities</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => scrollToSection('about')}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
            <span className="ml-2 font-medium">Discover Our Vision</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
