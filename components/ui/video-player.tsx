"use client";

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";
import { Loader2 } from "lucide-react";

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  containerClassName?: string;
  onLoaded?: () => void;
}

const VideoPlayer = forwardRef<HTMLVideoElement, VideoPlayerProps>(
  ({ src, poster, className, containerClassName, onLoaded, ...props }, ref) => {
    const [isInView, setIsInView] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => videoRef.current as HTMLVideoElement);

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

    const handleLoadedData = (e: React.SyntheticEvent<HTMLVideoElement>) => {
      setIsLoaded(true);
      if (onLoaded) onLoaded();
      if (props.onLoadedData) props.onLoadedData(e);
    };

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative overflow-hidden bg-black/5 w-full h-full min-h-[inherit]", 
          containerClassName
        )}
      >
        {/* Poster / Loading Layer - Stays with Z-index until video fades in */}
        <div 
          className={cn(
            "absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-700 ease-in-out bg-black",
            isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
          )}
        >
          {poster ? (
            <>
              <img
                src={poster}
                className="absolute inset-0 w-full h-full object-cover"
                alt="Loading placeholder"
              />
              <div className="relative z-30 flex flex-col items-center gap-3">
                <div className="p-3 rounded-full bg-black/40 backdrop-blur-md">
                   <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
                <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">Loading</span>
              </div>
            </>
          ) : (
            <Skeleton className="w-full h-full bg-white/10" />
          )}
        </div>

        {/* Video Layer */}
        {isInView && (
          <video
            ref={videoRef}
            src={src}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-1000",
              isLoaded ? "opacity-100" : "opacity-0",
              className
            )}
            onLoadedData={handleLoadedData}
            preload="auto"
            loop
            muted
            playsInline
            {...props}
          />
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
