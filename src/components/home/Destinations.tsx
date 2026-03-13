import Image from "next/image";
import { brandContent } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const destinations = [
  {
    name: "Spiritual & Cultural Visits",
    description: "Temples, ashrams, and sacred sites.",
    image:
      "https://media3.thrillophilia.com/filestore/3gqbw1tu9pac2318jv8jtl2mzdpi_shutterstock_1096957235.jpg?h=422&w=auto&dpr=1.125",
  },
  {
    name: "Jungle Safari",
    description: "Valmiki Tiger Reserve adventure.",
    image:
      "https://wildkasarwadi.com/assets/uploads/experiences/jungle_safari.jpg",
  },
  {
    name: "Riverside Peace",
    description: "Serene moments by the Gandak river.",
    image:
      "https://media3.thrillophilia.com/filestore/xcqho076dgqoczuzlimfpavs6p9m_camp-riverside-rishikesh.jpeg?dpr=1.125&w=1707",
  },
  {
    name: "Scenic Views",
    description: "Breathtaking bridges and viewpoints.",
    image:
      "https://media2.thrillophilia.com/images/photos/000/373/541/original/1622526989_75p0tu5vrqtdpuqibnlnxnefjeo3_1564496850_shutterstock_184393109.jpg?w=753&h=450&dpr=1.5",
  },
];

export function Destinations() {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-6 sm:mb-10 max-w-4xl text-center">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary bg-secondary/10 px-4 sm:px-6 py-2 rounded-full mb-2 sm:mb-4">
            Explore the Beauty
          </span>
          <h2 className="mt-1 sm:mt-2 text-xl sm:text-2xl md:text-3xl font-serif font-bold text-primary leading-tight">
            Valmikinagar & Nepal Highlights
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-4 sm:mt-6 rounded-full" />
          <p className="mt-4 sm:mt-5 text-neutral-700 text-base md:text-md lg:text-lg leading-relaxed max-w-3xl mx-auto">
            {brandContent.journeyDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20 hover:border-secondary/40"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                width={300}
                height={350}
                className="object-cover w-full h-48 sm:h-56 transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 line-clamp-2">
                  {dest.name}
                </h3>
                <p className="text-neutral-200 text-xs sm:text-sm line-clamp-2">
                  {dest.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* <Button size="lg" variant="primary" className="shadow-lg">
            View All Tours
          </Button> */}
        </div>
      </div>
    </section>
  );
}
