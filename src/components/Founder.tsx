import { Card, CardContent } from "@/components/ui/card";

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About the Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate educator and advocate behind LiftoffLearning's mission to democratize STEM education.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-0 shadow-xl">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative">
                  <img 
                    src="/Screenshot 2025-06-24 131947.png" 
                    alt="Founder portrait" 
                    className="w-full h-80 md:h-full object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-20"></div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Shiva Garuda
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-6">
                  Founder & President
                </p>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    The vision for LiftoffLearning was born from a deep commitment to educational equity and 
                    a recognition that access to quality STEM education should not depend on a school's zip code 
                    or funding level.
                  </p>
                  
                  <p>
                    With a background in education and a passion for innovation, our founder saw firsthand 
                    the disparities that exist in STEM education across different communities. This experience 
                    sparked the creation of LiftoffLearning as a way to bridge these gaps and ensure that 
                    all students have the opportunity to explore, create, and discover through hands-on STEM learning.
                  </p>
                  
                  <p>
                    "Every child deserves the chance to see themselves as a scientist, engineer, or innovator. 
                    LiftoffLearning exists to make that vision a reality, one school and one student at a time."
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Connect with our Founder</h4>
                  <p className="text-gray-600">
                    Interested in learning more about our mission or getting involved? 
                    We'd love to hear from passionate educators, volunteers, and advocates for educational equity.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Founder;
