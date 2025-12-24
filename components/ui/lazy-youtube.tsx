"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

interface LazyYouTubeProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function LazyYouTube({ videoId, title, className }: LazyYouTubeProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden bg-gray-900 w-full h-full", className)}
    >
    
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <img
            src={thumbnailUrl}
            className="w-full h-full object-cover opacity-60"
            alt={title || "YouTube video placeholder"}
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <Skeleton className="w-16 h-16 rounded-full bg-white/20" />
          </div>
        </div>
      )}

      {isInView && (
        <iframe
          title={title || "YouTube video player"}
          className={cn(
            "w-full h-full relative z-0 transition-opacity duration-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
