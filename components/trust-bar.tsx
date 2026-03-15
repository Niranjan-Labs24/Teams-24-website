"use client";

import Image from "next/image";

interface Logo {
  src: string;
}

const logos: Logo[] = [
  { src: "/logs2/Frame 1171275574.png" },
  { src: "/logs2/Frame 1171275577.png" },
  { src: "/logs2/Frame 1171275575.png" },
  { src: "/logs2/Frame 1171275578.png" },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-white py-4 xl:py-[1.25vw] select-none overflow-hidden">
      <div 
        className="mx-auto px-4 xl:px-[2vw] flex items-center justify-center xl:w-[90vw] xl:max-w-none xl:h-[4.4vw]"
      >
        <div className="flex items-center xl:gap-[3.75vw]">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center xl:gap-[3.75vw]">
              <div className="relative h-10 w-32 md:w-40 xl:w-[17vw] xl:h-[4.4vw]">
                <Image
                  src={logo.src}
                  alt={`Partner Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Separator - Vertical line */}
              {index < logos.length - 1 && (
                <div className="h-6 w-[1px] bg-[#E5E5EA] xl:h-[2.5vw]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
