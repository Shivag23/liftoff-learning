import { HandHeart, DollarSign, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GetInvolved = () => {
  const ways = [
    {
      icon: HandHeart,
      title: "Join Our Mission",
      description: "Help us develop resources, connect with schools, and build our community of STEM advocates.",
      action: "Get Involved",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: DollarSign,
      title: "Support Our Growth",
      description: "Your financial support helps us develop and distribute STEM resources to schools in need.",
      action: "Support Us",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Educator Partnerships",
      description: "Are you an educator or school administrator? Let's discuss how we can work together.",
      action: "Partner With Us",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Spread Awareness",
      description: "Share our mission with your network and help us connect with more supporters and partners.",
      action: "Share Our Vision",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing Movement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            As an early-stage organization, we're building a community of passionate individuals who believe in 
            educational equity. There are many ways to support LiftoffLearning and help us develop resources 
            that will make a meaningful difference in STEM education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ways.map((way, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
              <CardHeader className="text-center pb-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${way.gradient} rounded-full mb-4 mx-auto`}>
                  <way.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{way.description}</p>
                <Button className={`w-full bg-gradient-to-r ${way.gradient} hover:opacity-90 transition-opacity`}>
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the foundation for equitable STEM education. Whether you're an educator, 
            volunteer, donor, or advocate, your support helps us create opportunities for every student 
            to explore, create, and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Join Our Community
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              Support Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
