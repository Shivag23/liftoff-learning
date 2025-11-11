import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Target, Award } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "80%",
      label: "Boost in STEM Interest",
      description: "Students show increased interest in STEM fields after our sessions",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: Award,
      value: "7",
      label: "School Partnerships",
      description: "Active partnerships with schools and educators",
      color: "from-orange-600 to-orange-400"
    }
  ];

  return (
    <section id="statistics" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data from our Google Forms and student feedback shows the positive impact we're making in STEM education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full mb-6`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight the main statistic */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-2 border-blue-200 shadow-xl bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-6">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  We've Boosted Students' Interest in STEM by{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    80%
                  </span>
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Based on feedback from our Google Forms, students report significantly increased interest 
                  and engagement in STEM subjects after participating in our hands-on learning sessions.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* School Partnerships List */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our School Partners
                </h3>
                <p className="text-lg text-gray-600">
                  We're proud to work with these schools to bring hands-on STEM education to students
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Mountain View",
                  "Indian Peaks",
                  "Longs Peak",
                  "Emerald",
                  "Timberline",
                  "Northridge",
                  "Columbine"
                ].map((school, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-900 font-semibold">{school}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

