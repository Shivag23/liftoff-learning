import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface SessionImage {
  src: string;
  caption: string;
}

const PastSessions = () => {
  // Session images - you can add more images here
  // Images should be placed in the public/images folder
  const sessionImages: SessionImage[] = [
    {
      src: "/images/Liftoff Learning 9.16.2025 MVE 10.jpg",
      caption: "Students building catapult kits during a hands-on session"
    },
    {
      src: "/images/Liftoff Learning 9.16.2025 MVE 7 (1).jpg",
      caption: "Engaged students working together on STEM projects"
    },
    {
      src: "/images/Liftoff Learning 9.16.2025 MVE 2.jpg",
      caption: "Celebrating successful launches and learning moments"
    }
  ];

  return (
    <section id="past-sessions" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Past Sessions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our students in action as they explore STEM through hands-on learning experiences
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {sessionImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-xl overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative">
                        <img 
                          src={image.src} 
                          alt={image.caption}
                          className="w-full h-[500px] object-cover"
                          onError={(e) => {
                            // Fallback if image doesn't exist
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                          <p className="text-white text-lg font-medium">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          {/* Grid view for larger screens */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {sessionImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">
                      {image.caption}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastSessions;

