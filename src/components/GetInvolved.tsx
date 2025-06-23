
import { HandHeart, DollarSign, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GetInvolved = () => {
  const ways = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Help us assemble kits, visit schools, or mentor students in your community.",
      action: "Join Our Team",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your financial support helps us create and distribute more STEM kits to schools in need.",
      action: "Make a Donation",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Partner",
      description: "Are you an educator or school administrator? Let's discuss how we can support your students.",
      action: "Become a Partner",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Spread the Word",
      description: "Share our mission with your network and help us reach more students who need STEM resources.",
      action: "Share Our Mission",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to support LiftoffLearning and help us bring quality STEM education to more students. 
            Every contribution, big or small, makes a meaningful difference in a young person's life.
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
            Join hundreds of volunteers, donors, and partners who are helping us transform STEM education. 
            Together, we can ensure that every student has the opportunity to explore, create, and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Start Volunteering Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3"
            >
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
