"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Clock4, CheckCircle2 } from "lucide-react";
import { DayPlan } from "@/lib/data";

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
      <h2 className="text-2xl font-serif font-bold text-primary mb-8">
        Itinerary
      </h2>
      <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
        {days.map((day) => (
          <div key={day.day} className="relative pl-8">
            <div
              className={`absolute -left-2.25 top-0 w-4 h-4 rounded-full border-2 transition-colors ${
                openDay === day.day
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              }`}
            />

            <div
              className="cursor-pointer group"
              onClick={() => toggleDay(day.day)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">
                    Day {day.day}
                  </span>
                  <h3
                    className={`text-lg font-bold transition-colors ${
                      openDay === day.day
                        ? "text-primary"
                        : "text-gray-800 group-hover:text-primary"
                    }`}
                  >
                    {day.title}
                  </h3>
                </div>
                <div className="text-gray-400 group-hover:text-primary transition-colors">
                  {openDay === day.day ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>

              {openDay === day.day && (
                <div className="mt-4 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-3 rounded-xl border border-gray-100 p-4 bg-gray-50">
                    {day.schedule.map((slot) => (
                      <div
                        key={`${day.day}-${slot.time}-${slot.activity}`}
                        className="flex items-start gap-3 text-sm"
                      >
                        <Clock4 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <p className="font-semibold text-gray-800">
                            {slot.time}
                          </p>
                          <p>{slot.activity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                      What’s inside this day
                    </p>
                    <ul className="space-y-2">
                      {day.inclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
