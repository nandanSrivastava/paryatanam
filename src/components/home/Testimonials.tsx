import { Star, Quote } from "lucide-react";
import Image from "next/image"; // Note: Using Image component but src will be external URL for now

const testimonials = [
    {
        id: 1,
        name: "Aarav Patel",
        role: "Adventure Enthusiast",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop",
        content: "Paryatanam planned the perfect Ladakh trip for us. The guides were knowledgeable, and the arrangements were top-notch. Highly recommended!",
        rating: 5,
    },
    {
        id: 2,
        name: "Sneha Reddy",
        role: "Solo Traveler",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        content: "Traveling solo can be daunting, but Paryatanam made me feel safe and supported throughout my Kerala trip. An unforgettable experience!",
        rating: 5,
    },
    {
        id: 3,
        name: "Rahul & Meera",
        role: "Honeymooners",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        content: "Our honeymoon in Maldives was magical, thanks to the meticulous planning by the team. Every detail was taken care of.",
        rating: 4,
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-neutral-50 px-4 md:px-6">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2">What Travelers Say</h2>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-6 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                            <Quote className="absolute top-8 right-8 text-secondary/20 w-10 h-10" />

                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                    />
                                ))}
                            </div>

                            <p className="text-neutral-600 mb-8 leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                    {/* Using img tag for simplicity with external URLs in this context, or Next Image if domains configured */}
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                    <span className="text-xs text-neutral-500 uppercase tracking-wide">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
