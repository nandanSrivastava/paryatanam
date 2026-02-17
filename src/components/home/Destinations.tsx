import Image from "next/image";
import { brandContent } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const destinations = [
  {
    name: "Spiritual & Cultural Visits",
    description: "Temples, ashrams, and sacred sites.",
    image: "https://valmikitigerreserve.com/wp-content/uploads/2022/08/Nardevi-Temple-min-1024x768.jpg",
  },
  {
    name: "Jungle Safari",
    description: "Valmiki Tiger Reserve adventure.",
    image: "https://wildkasarwadi.com/assets/uploads/experiences/jungle_safari.jpg",
  },
  {
    name: "Riverside Peace",
    description: "Serene moments by the Gandak river.",
    image: "https://i.ytimg.com/vi/sT6YZqNW0TE/hq720.jpg?sqp=-oaymwEkCJUDENAFSFryq4qpAxYIARUAAAAAJQAAyEI9AICiQ3gB0AEB&rs=AOn4CLBriEtzLD6vMQgAXHnR_0CK58ygNw",
  },
  {
    name: "Scenic Views",
    description: "Breathtaking bridges and viewpoints.",
    image: "https://media2.thrillophilia.com/images/photos/000/373/541/original/1622526989_75p0tu5vrqtdpuqibnlnxnefjeo3_1564496850_shutterstock_184393109.jpg?w=753&h=450&dpr=1.5",
  },
];

export function Destinations() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 sm:mb-14 md:mb-16 max-w-4xl text-center">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-secondary bg-secondary/10 px-4 sm:px-6 py-2 rounded-full mb-3 sm:mb-4">
            Explore the Beauty
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            Valmikinagar & Nepal Highlights
          </h2>
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-6 sm:mt-8 rounded-full" />
          <p className="mt-6 sm:mt-8 text-neutral-700 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            {brandContent.journeyDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <Image
                src={dest.image}
                alt={dest.name}
                width={400}
                height={500}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {dest.name}
                </h3>
                <p className="text-neutral-300 text-sm">{dest.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="primary" className="shadow-lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
}
