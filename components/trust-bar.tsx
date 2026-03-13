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
    <div className="w-full bg-white py-4 select-none overflow-hidden">
      <div 
        className="mx-auto px-4 flex items-center justify-center xl:max-w-[1160px] 2xl:max-w-[1392px] xl:h-[56px] 2xl:h-[67px]"
      >
        <div className="flex items-center xl:gap-[48px] 2xl:gap-[58px]">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center xl:gap-[48px] 2xl:gap-[58px]">
              <div className="relative h-10 w-32 md:w-40 xl:w-[218px] 2xl:w-[262px] xl:h-[56px] 2xl:h-[67px]">
                <Image
                  src={logo.src}
                  alt={`Partner Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Separator - Vertical line */}
              {index < logos.length - 1 && (
                <div className="h-6 w-[1px] bg-[#E5E5EA] xl:h-[32px]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
