"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  // Smooth scroll function
  const handleSmoothScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Social media links from environment variables
  const socialLinks = {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/teams24",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/teams24",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/Teams_24?s=20",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/teams24"
  };

  return (
    <footer className="w-full max-w-[90rem] mx-auto h-auto min-h-[40.5rem] bg-white font-[Manrope]  relative overflow-hidden">
      <div className="relative z-10 h-full pt-8 md:pt-16 lg:pt-[6.75rem] px-4 sm:px-6 md:px-8 lg:px-[5.875rem] pb-32">
        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-0 items-start">
          {/* ✅ Logo */}
          <div className="col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <div className="flex items-center gap-2">
              <Image
                src="/Mask group (1).png"
                alt="Teams24 Logo"
                width={18}
                height={18}
                className="object-contain"
              />
              <span
                className="font-bold text-black"
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.25rem, 4vw, 1.5rem)",
                  lineHeight: "40px",
                }}
              >
                Teams24
              </span>
            </div>
          </div>

          {/* ✅ Company Section */}
          <div className="lg:ml-[3.625rem]">
            <p className="font-bold text-black mb-4 md:mb-6 text-lg">Company</p>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <button
                  onClick={() => handleSmoothScroll("what-we-do")}
                  className="text-gray-600 hover:text-black transition font-semibold text-base cursor-pointer"
                >
                  What we do
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll("how-it-works")}
                  className="text-gray-600 hover:text-black transition font-semibold text-base cursor-pointer"
                >
                  How it works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll("careers")}
                  className="text-gray-600 hover:text-black transition font-semibold text-base cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll("faq")}
                  className="text-gray-600 hover:text-black transition font-semibold text-base cursor-pointer"
                >
                  FAQ's
                </button>
              </li>
            </ul>
          </div>

          {/* ✅ Legal Section */}
          <div className="lg:ml-[5.5rem]">
            <p className="font-bold text-black mb-4 md:mb-6 text-lg">Legal</p>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-black transition font-semibold text-base"
                >
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-black transition font-semibold text-base"
                >
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ Contact Section */}
          <div className="col-span-2 lg:col-span-1 lg:ml-[5.5rem] mt-8 lg:mt-0">
            <p className="font-bold text-black mb-4 md:mb-6 text-lg">Contact</p>
            <p className="text-gray-600 mb-4 md:mb-6 font-semibold text-base">
              <Link
                href="mailto:support@teams24.in"
                className="hover:text-black"
              >
                support@teams24.in
              </Link>
            </p>

            {/* ✅ Social Icons Section */}
            <div
              className="
                flex gap-[11px]
                sm:justify-center
                lg:justify-start
                w-[201px] h-[42px]
                mx-auto lg:mx-0
              "
            >
              {/* Instagram */}
              <Link
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/instagram.png"
                  alt="Instagram"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>

              {/* LinkedIn */}
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>

              {/* X (Twitter) */}
              <Link
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/x.png"
                  alt="X"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>

              {/* Facebook */}
              <Link
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/facebook.png"
                  alt="Facebook"
                  width={42}
                  height={42}
                  className="hover:opacity-80 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Watermark (Unchanged) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen max-w-[90rem] overflow-hidden pointer-events-none">
        <div className="w-full h-[7.5rem] sm:h-[9.375rem] md:h-[12.5rem] lg:h-[15.625rem] xl:h-[21.875rem] flex items-end justify-center select-none opacity-10">
          <p
            className="font-normal text-center whitespace-nowrap w-full px-4"
            style={{
              fontFamily: "Dyson Sans Modern",
              fontWeight: 400,
              fontSize: "clamp(5rem, 25vw, 25rem)",
              lineHeight: "0.6",
              color: "#131313",
              transform: "translateY(15%)",
              minWidth: "max-content",
            }}
          >
            Teams24
          </p>
        </div>
      </div>
    </footer>
  );
}