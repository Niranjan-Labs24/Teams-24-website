"use client";

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { cn } from "@/lib/utils";
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
    const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
      if (onLoaded) onLoaded();
      if (props.onLoadedData) props.onLoadedData(e);
    };

    return (
      <div
        ref={containerRef}
        className={cn("relative w-full h-full overflow-hidden bg-cover bg-center", containerClassName)}
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      >
      
        {isInView && (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className={cn("w-full h-full object-cover relative z-10", className)}
            onLoadedData={handleLoadedData}
            preload="auto"
            loop
            muted
            playsInline
            {...props}
          />
        )}

        {isLoading && (
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center gap-3">
              <div className="p-3 rounded-full bg-black/40 backdrop-blur-md">
                <Loader2 className="w-8 h-8 text-white animate-spin" />
              </div>
              <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                Loading
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
