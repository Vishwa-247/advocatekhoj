"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Calendar, Scale } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  type: "judgment" | "event";
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const sampleNews: NewsItem[] = [
      { id: "1", title: "Supreme Court upholds digital privacy rights in landmark judgment", date: "2025-09-12", type: "judgment" },
      { id: "2", title: "National Law Conference on AI & Legal Ethics - Mumbai, Sept 25-26", date: "2025-09-25", type: "event" },
      { id: "3", title: "SC clarifies jurisdiction in cross-border commercial disputes", date: "2025-09-11", type: "judgment" },
      { id: "4", title: "Workshop on Corporate Law Reforms - Delhi, Oct 5-7", date: "2025-10-05", type: "event" },
      { id: "5", title: "Constitutional bench ruling on environmental law implementation", date: "2025-09-10", type: "judgment" },
    ];
    setNews(sampleNews);
  }, []);

  const judgments = news.filter((item) => item.type === "judgment");
  const events = news.filter((item) => item.type === "event");

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Latest Judgments Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-primary/10 overflow-hidden flex flex-col">
            <div className="bg-gradient-to-r from-[#00377b] to-[#1453a3] p-6 text-white">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6" />
                <h3 className="text-xl font-bold">Latest Supreme Court Judgments</h3>
              </div>
            </div>
            <div className="p-6 flex-1 space-y-6">
              {judgments.slice(0, 3).map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <p className="text-foreground group-hover:text-primary transition-colors font-medium line-clamp-2 text-sm md:text-base">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.date).toLocaleDateString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link href="/law-library" className="w-full">
                <Button className="w-full bg-gradient-to-r from-[#00377b] to-[#1453a3] hover:brightness-90 text-white border border-[#001944]/80 shadow-md transition-all duration-200">
                  View All Judgments
                </Button>
              </Link>
            </div>
          </div>

          {/* Forthcoming Events Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-secondary/10 overflow-hidden flex flex-col">
            <div className="bg-[#d67c40] p-6 text-white">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <h3 className="text-xl font-bold">Forthcoming Legal Events</h3>
              </div>
            </div>
            <div className="p-6 flex-1 space-y-6">
              {events.slice(0, 3).map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <p className="text-foreground group-hover:text-secondary transition-colors font-medium line-clamp-2 text-sm md:text-base">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(item.date).toLocaleDateString("en-IN")}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link href="/sawal-jawab" className="w-full">
                <Button className="w-full bg-[#d67c40] hover:bg-[#c26a36] hover:brightness-90 text-white font-semibold shadow-md border border-[#d67c40]/70 transition-all duration-200">
                  Explore Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
