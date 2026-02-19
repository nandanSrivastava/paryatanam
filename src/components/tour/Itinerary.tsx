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
    <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-100">
      <h2 className="text-xl xs:text-2xl font-serif font-bold text-primary mb-6 sm:mb-8">
        Itinerary
      </h2>
      <div className="relative border-l-2 border-gray-100 ml-3 sm:ml-4 space-y-6 sm:space-y-8">
        {days.map((day) => (
          <div key={day.day} className="relative pl-6 sm:pl-8">
            <div
              className={`absolute -left-2.25 top-0 w-4 h-4 rounded-full border-2 transition-colors ${
                openDay === day.day
                  ? "bg-primary border-primary"
                  : "bg-white border-gray-300"
              }`}
            />

            <div
              className="cursor-pointer group touch-manipulation py-2"
              onClick={() => toggleDay(day.day)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">
                    Day {day.day}
                  </span>
                  <h3
                    className={`text-base xs:text-lg sm:text-lg font-bold transition-colors ${
                      openDay === day.day
                        ? "text-primary"
                        : "text-gray-800 group-hover:text-primary group-active:text-primary"
                    }`}
                  >
                    {day.title}
                  </h3>
                </div>
                <div className="text-gray-400 group-hover:text-primary group-active:text-primary transition-colors shrink-0 p-1">
                  {openDay === day.day ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>

              {openDay === day.day && (
                <div className="mt-3 sm:mt-4 text-gray-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="space-y-2.5 sm:space-y-3 rounded-lg sm:rounded-xl border border-gray-100 p-3 sm:p-4 bg-gray-50">
                    {
                      // Group consecutive schedule slots by time. Empty times inherit previous time.
                    }
                    {(() => {
                      type Group = { time: string; activities: string[] };
                      const groups: Group[] = [];
                      let current: Group | null = null;

                      day.schedule.forEach((slot) => {
                        const t = (slot.time || "").trim();
                        if (t === "") {
                          // continuation of previous time
                          if (current) current.activities.push(slot.activity);
                          else
                            current = { time: "", activities: [slot.activity] };
                        } else {
                          if (current && current.time === t) {
                            current.activities.push(slot.activity);
                          } else {
                            if (current) groups.push(current);
                            current = { time: t, activities: [slot.activity] };
                          }
                        }
                      });

                      if (current) groups.push(current);

                      return groups.map((g, i) => {
                        const key = `${day.day}-${i}-${g.time}`;
                        if (g.activities.length > 1) {
                          return (
                            <div
                              key={key}
                              className="flex items-start gap-2 sm:gap-3 text-sm"
                            >
                              <Clock4 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <div className="flex-1 min-w-0">
                                {g.time && (
                                  <p className="font-semibold text-gray-800 mb-1">
                                    {g.time}
                                  </p>
                                )}
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                  {g.activities.map((act, idx) => (
                                    <li key={idx} className="text-sm">
                                      {act}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          );
                        }

                        // single activity rendered as a bullet for visual consistency
                        return (
                          <div
                            key={key}
                            className="flex items-start gap-2 sm:gap-3 text-sm"
                          >
                            <Clock4 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <div className="flex-1 min-w-0">
                              {g.time && (
                                <p className="font-semibold text-gray-800 mb-1">
                                  {g.time}
                                </p>
                              )}
                              <ul className="list-disc pl-5 text-gray-700">
                                <li className="text-sm">{g.activities[0]}</li>
                              </ul>
                            </div>
                          </div>
                        );
                      });
                    })()}
                  </div>

                  <div className="mt-3 sm:mt-4">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                      What's inside this day
                    </p>
                    <ul className="space-y-2">
                      {day.inclusions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="flex-1 min-w-0">{item}</span>
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
