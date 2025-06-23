
import { Target, Heart, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Equity in Education",
      description: "Ensuring every student has access to quality STEM learning opportunities, regardless of their school's resources."
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Building stronger communities by empowering students with the skills they need for tomorrow's challenges."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Fostering teamwork and collaboration through hands-on projects that engage students in real-world problem solving."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Creativity",
      description: "Inspiring the next generation of innovators, engineers, and scientists through engaging STEM experiences."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            LiftoffLearning was founded with a simple yet powerful belief: every student deserves access to 
            high-quality STEM education. Through our comprehensive learning kits and community partnerships, 
            we're breaking down barriers and creating opportunities for underserved students to excel in science, 
            technology, engineering, and mathematics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Comprehensive STEM kits designed by educators for real classroom use</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Focus on Title 1 schools to address educational equity directly</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Ongoing support and resources for teachers and students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Community-driven approach with volunteer opportunities</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop&crop=center" 
                alt="STEM learning in action" 
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
