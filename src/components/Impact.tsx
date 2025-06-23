
import { Users, GraduationCap, School, Gift } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Gift,
      number: "500+",
      label: "STEM Kits Donated",
      description: "Comprehensive learning kits delivered to schools"
    },
    {
      icon: School,
      number: "50+",
      label: "Title 1 Schools",
      description: "Partner schools across the nation"
    },
    {
      icon: Users,
      number: "10,000+",
      label: "Students Impacted",
      description: "Young minds inspired to pursue STEM"
    },
    {
      icon: GraduationCap,
      number: "200+",
      label: "Teachers Trained",
      description: "Educators equipped with new resources"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Growing Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since our founding, LiftoffLearning has made a significant difference in STEM education accessibility. 
            Here's how we're changing lives and communities, one kit at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Roosevelt Elementary</h4>
                  <p className="text-gray-600">
                    "The LiftoffLearning kits transformed our science classes. Student engagement increased by 85%, 
                    and we saw remarkable improvement in problem-solving skills across all grade levels."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Sarah Johnson, Science Teacher</p>
                </div>
                
                <div className="border-l-4 border-green-600 pl-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Lincoln Middle School</h4>
                  <p className="text-gray-600">
                    "Our students who previously showed little interest in STEM are now asking when the next 
                    engineering challenge begins. These kits have sparked a genuine love for learning."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Michael Chen, Principal</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop&crop=center" 
                alt="Students working on circuits" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop&crop=center" 
                alt="Student using technology" 
                className="w-full h-32 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop&crop=center" 
                alt="Group learning session" 
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
