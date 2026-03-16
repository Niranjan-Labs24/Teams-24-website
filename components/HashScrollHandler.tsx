"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { handleSmoothScroll } from "@/lib/utils";

export default function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to handle scrolling based on hash
    const handleHashScroll = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        // Wait a small bit for the page content to be fully ready
        setTimeout(() => {
          handleSmoothScroll(hash);
        }, 100);
      }
    };

    // Run on initial load and when pathname changes (if needed)
    handleHashScroll();

    // Listen for hashchange events (for same-page hash links)
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, [pathname]);

  return null;
}
