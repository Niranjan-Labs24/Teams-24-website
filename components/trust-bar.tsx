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
        className="mx-auto px-4 flex items-center justify-center"
        style={{
            maxWidth: "1160px",
            height: "56px"
        }}
      >
        <div className="flex items-center" style={{ gap: "48px" }}>
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center" style={{ gap: "48px" }}>
              <div className="relative h-10 w-32 md:w-40">
                <Image
                  src={logo.src}
                  alt={`Partner Logo ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Separator - Vertical line */}
              {index < logos.length - 1 && (
                <div className="h-6 w-[1px] bg-[#E5E5EA]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
