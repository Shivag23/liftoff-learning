import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, DollarSign, School, Target, Calendar, Phone } from "lucide-react";

const DrLauer = () => {
  const futureKits = [
    {
      name: "Lava Lamp Kit",
      materials: "Oil, water, food coloring, Alka-Seltzer",
      learning: "Teaches density and chemical reactions"
    },
    {
      name: "Balloon-Powered Car Kit", 
      materials: "Straws, bottle caps, cardboard",
      learning: "Great for Newton's Laws"
    },
    {
      name: "Paper Circuit Kit",
      materials: "Copper tape, LEDs, button batteries", 
      learning: "Teaches simple circuits"
    }
  ];

  const costBreakdown = [
    { material: "Popsicle Sticks", cost: 85.47 },
    { material: "Foam Balls", cost: 50 },
    { material: "Rubber Bands", cost: 20 },
    { material: "Bottle Caps", cost: 66 }
  ];

  const totalCost = costBreakdown.reduce((sum, item) => sum + item.cost, 0);
  const costPerKit = totalCost / 1000;

  const educators = [
    {
      name: "Mr. Glover",
      school: "Longs Peak Elementary School",
      status: "completed",
      notes: "Loved to have me come in and present the kits and bring some of my high school friends with me."
    },
    {
      name: "Lauren Vargas", 
      school: "Mountain View Elementary",
      status: "upcoming",
      notes: "Meeting scheduled for Friday 9/5 to plan session for 250 kids in K-4."
    },
    {
      name: "Ms. Trembly",
      school: "Indian Peaks Elementary", 
      status: "confirmed",
      notes: "Solid plans established to work with her students and provide close to 100 catapult kits for hands-on learning."
    },
    {
      name: "Dr. Glover",
      school: "School Partnership",
      status: "upcoming", 
      notes: "Meeting scheduled to discuss expanded collaboration opportunities."
    },
    {
      name: "Ms. Dykes",
      school: "Northridge Elementary",
      status: "upcoming", 
      notes: "Meeting scheduled to explore STEM kit integration opportunities."
    },
    {
      name: "Ms. Samara Williams",
      school: "Broomfield School District",
      status: "confirmed",
      notes: "Major partnership established - sending 200 catapult kits to support district-wide STEM initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition mb-8"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meeting with 
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Education Foundation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive presentation of Liftoff Learning's catapult kit project and expansion plans
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-6 w-6 text-blue-600" />
                Inspiration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  "The inspiration came from my experience in Science Olympiad, where I saw how fun the younger division of students were having when launching their catapults at the competition. However, I realised that none of these schools were Title 1. So, to bridge the gap and help Title 1 students find their interest in STEM, I made tiny easy to build catapult kits that they could built in an in person session or take home and continue exploring. These kits aren't just about building—they're about sparking curiosity and making STEM accessible to students who might not otherwise have these opportunities."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Future Kit Ideas */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lightbulb className="h-6 w-6 text-green-600" />
                Future Kit Ideas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">Tangible, visually interesting, and low-cost kits designed to engage students in hands-on learning:</p>
              <div className="grid md:grid-cols-3 gap-6">
                {futureKits.map((kit, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-lg text-gray-900 mb-3">{kit.name}</h4>
                    <p className="text-sm text-gray-600 mb-3"><strong>Materials:</strong> {kit.materials}</p>
                    <p className="text-sm text-blue-600">{kit.learning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <DollarSign className="h-6 w-6 text-green-600" />
                Cost Analysis - 1000 Catapult Kits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Material Breakdown</h4>
                  <div className="space-y-3">
                    {costBreakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">{item.material}</span>
                        <span className="font-semibold">${item.cost.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between items-center py-3 border-t-2 border-gray-300 font-bold text-lg">
                      <span>Total Cost</span>
                      <span className="text-green-600">${totalCost.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">Cost Per Kit</h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">${costPerKit.toFixed(4)}</div>
                    <div className="text-2xl font-semibold text-gray-700">≈ $0.22 per kit</div>
                    <p className="text-sm text-gray-600 mt-4">
                      Funded through personal savings from birthday and summer job money
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Educators and Schools */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <School className="h-6 w-6 text-blue-600" />
                Educator Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {/* Completed Meetings */}
                <div>
                  <h4 className="font-semibold text-lg text-green-600 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    Completed Meetings
                  </h4>
                  <div className="grid gap-4">
                    {educators.filter(educator => educator.status === 'completed').map((educator, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="font-semibold text-gray-900">{educator.name} - {educator.school}</div>
                        <p className="text-gray-700 mt-2">{educator.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirmed Partnerships */}
                <div>
                  <h4 className="font-semibold text-lg text-purple-600 mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Confirmed Partnerships
                  </h4>
                  <div className="grid gap-4">
                    {educators.filter(educator => educator.status === 'confirmed').map((educator, index) => (
                      <div key={index} className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="font-semibold text-gray-900">{educator.name} - {educator.school}</div>
                        <p className="text-gray-700 mt-2">{educator.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Meetings */}
                <div>
                  <h4 className="font-semibold text-lg text-blue-600 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Upcoming Meetings
                  </h4>
                  <div className="grid gap-4">
                    {educators.filter(educator => educator.status === 'upcoming').map((educator, index) => (
                      <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="font-semibold text-gray-900">{educator.name} - {educator.school}</div>
                        <p className="text-gray-700 mt-2">{educator.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Goal Statement */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8 shadow-lg border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="h-6 w-6 text-blue-600" />
                Our Goal & Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-8 text-center">
                <p className="text-xl leading-relaxed">
                  "My goal is to spread the excitement of practical, hands-on science to students who usually don't have access to it. With SVVEF's backing — whether it's in the form of support, mentorship, or network — I want to scale this project to as many schools as possible."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join us in making STEM education accessible to all students, regardless of their school's resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition"
              >
                Learn More About Liftoff Learning
              </Link>
              <Link
                to="/kits"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                View Our Catapult Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrLauer; 