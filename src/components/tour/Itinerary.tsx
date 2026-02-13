"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MapPin } from "lucide-react";

interface DayPlan {
    day: number;
    title: string;
    description: string;
}

interface ItineraryProps {
    days: DayPlan[];
}

export function Itinerary({ days }: ItineraryProps) {
    const [openDay, setOpenDay] = useState<number | null>(1);

    const toggleDay = (day: number) => {
        setOpenDay(openDay === day ? null : day);
    };

    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-serif font-bold text-primary mb-8">Itinerary</h2>
            <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
                {days.map((day) => (
                    <div key={day.day} className="relative pl-8">
                        {/* Timeline Dot */}
                        <div
                            className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors ${openDay === day.day ? "bg-primary border-primary" : "bg-white border-gray-300"
                                }`}
                        />

                        <div
                            className="cursor-pointer group"
                            onClick={() => toggleDay(day.day)}
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Day {day.day}</span>
                                    <h3 className={`text-lg font-bold transition-colors ${openDay === day.day ? "text-primary" : "text-gray-800 group-hover:text-primary"}`}>
                                        {day.title}
                                    </h3>
                                </div>
                                <div className="text-gray-400 group-hover:text-primary transition-colors">
                                    {openDay === day.day ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </div>
                            </div>

                            {openDay === day.day && (
                                <div className="mt-4 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p>{day.description}</p>
                                    {/* Placeholder for day-specific images or tags could go here */}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
