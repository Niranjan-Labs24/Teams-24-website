"use client";

import Image from "next/image";

interface Logo {
  src: string;
}

const logos: Logo[] = [
  { src: "/Avenue_logo.png" },
  { src: "/logo-11.png" },
  { src: "/pauket-logo.svg" },
  { src: "/spec.png" },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-white py-4 xl:py-[1.25vw] select-none overflow-hidden">
      <div
        className="w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto px-6 md:px-12 lg:px-16 xl:px-0 flex items-center justify-center xl:h-[5vw]"
      >
        <div className="flex items-center gap-8 md:gap-12 xl:gap-[5.5vw]">
          {logos.map((logo, index) => {
            const isFirst = index === 0;
            const isLargeDiv = isFirst;

            let scaleClass = "";
            if (isFirst) {
              scaleClass = "scale-[1.7] md:scale-[1.9] xl:scale-[2.1]";
            }

            return (
              <div key={index} className={`flex items-center gap-8 md:gap-12 xl:gap-[5.5vw] ${index >= 2 ? 'hidden sm:flex' : ''}`}>
                <div className={`relative ${isLargeDiv
                  ? "h-10 w-36 md:h-12 md:w-44 xl:w-[17vw] xl:h-[4.5vw]"
                  : "h-8 w-28 md:w-36 xl:w-[13vw] xl:h-[3.4vw]"
                  }`}>
                  <Image
                    src={logo.src}
                    alt={`Partner Logo ${index + 1}`}
                    fill
                    className={`object-contain ${scaleClass}`}
                  />
                </div>
                {/* Separator - Vertical line */}
                {index < logos.length - 1 && (
                  <div className="h-6 w-[1px] bg-[#E5E5EA] xl:h-[2vw]" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
