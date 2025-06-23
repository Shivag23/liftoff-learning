
import { Users, GraduationCap, School, Target } from "lucide-react";

const Impact = () => {
  const goals = [
    {
      icon: Target,
      number: "Our Goal",
      label: "STEM Resources",
      description: "Developing comprehensive learning materials for schools"
    },
    {
      icon: School,
      number: "Partnership",
      label: "School Outreach",
      description: "Building relationships with underserved schools"
    },
    {
      icon: Users,
      number: "Community",
      label: "Volunteer Network",
      description: "Growing our team of passionate STEM advocates"
    },
    {
      icon: GraduationCap,
      number: "Future",
      label: "Teacher Support",
      description: "Planning comprehensive educator resources"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Vision & Goals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an early-stage nonprofit, LiftoffLearning is focused on building the foundation for meaningful 
            impact in STEM education. Here's what we're working toward and how we plan to make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {goals.map((goal, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6">
                <goal.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-lg font-bold text-blue-600 mb-2">{goal.number}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{goal.label}</div>
              <div className="text-gray-600">{goal.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Development Focus</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Resource Development</h4>
                  <p className="text-gray-600">
                    We're in the early stages of developing comprehensive STEM learning resources that will be 
                    specifically designed for underserved schools. Our focus is on creating materials that are 
                    both engaging and accessible, regardless of existing infrastructure or funding levels.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Building</h4>
                  <p className="text-gray-600">
                    Building a strong foundation starts with community. We're connecting with educators, 
                    volunteers, and advocates who share our vision of educational equity. Together, we're 
                    laying the groundwork for sustainable impact in STEM education.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop&crop=center" 
                alt="Students working on STEM projects" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop&crop=center" 
                alt="Technology in education" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop&crop=center" 
                alt="Collaborative learning" 
                className="w-full h-32 object-cover rounded-lg shadow-md col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
