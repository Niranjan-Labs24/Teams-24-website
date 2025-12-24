"use client";

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "./skeleton";

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
        className={cn("relative overflow-hidden bg-black/5", containerClassName)}
      >
     
        {!isLoaded && (
          <div className="absolute inset-0 z-10">
            {poster ? (
              <img
                src={poster}
                className="w-full h-full object-cover blur-sm opacity-50 transition-opacity duration-700"
                alt="Loading placeholder"
              />
            ) : (
              <Skeleton className="w-full h-full bg-white/10" />
            )}
          </div>
        )}

      
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
            preload="none"
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
