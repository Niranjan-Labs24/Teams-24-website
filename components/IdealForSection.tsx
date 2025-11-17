import { useState, useEffect } from "react";
import ScrollSection from "./ScrollSection";
import section1Visual from "@/assets/section1-visual.png";
import candidatesCard from "@/assets/candidates-card.png";
import testimonialCard from "@/assets/testimonial-card.png";
import rolesVisual from "@/assets/roles-visual.png";
import Testimonials from "./testimonials";

export const IdealForSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sections = [
    {
      index: 1,
      title: "Growth-stage startups seeking rapid scale",
      subtitle:
        "Build your core team faster with dedicated talent partners who understand startup velocity.",
      stat: "50+",
      statLabel: "startups hiring",
      image: section1Visual,
      gradient: "bg-gradient-blue-purple",
    },
    {
      index: 2,
      title: "Visionary founders ready to build without boundaries",
      subtitle:
        "We've tried multiple agencies and it didn't work. With teams24 we had no timeline constraints or boundaries in setting up our core team.",
      stat: "70%",
      statLabel: "hiring success",
      image: candidatesCard,
      image2: testimonialCard,
      gradient: "bg-gradient-cyan-yellow",
    },
    {
      index: 3,
      title: "Entrepreneurs who value speed over bureaucracy",
      subtitle:
        "Skip the endless meetings and paperwork. Get matched with pre-vetted talent in days, not months.",
      stat: "3x",
      statLabel: "faster to hire",
      image: rolesVisual,
      gradient: "bg-gradient-orange-pink",
    },
  ];

  // Improved scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section is currently in view based on scroll position
      const sectionHeights = sections.map((_, index) => {
        const sectionElement = document.getElementById(`section-${index + 1}`);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          return {
            index: index + 1,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY
          };
        }
        return { index: index + 1, top: 0, bottom: 0 };
      });

      // Find the section that's currently in the center of the viewport
      const viewportCenter = scrollPosition + (windowHeight / 2);
      let activeSection = 1;

      for (const section of sectionHeights) {
        if (viewportCenter >= section.top && viewportCenter <= section.bottom) {
          activeSection = section.index;
          break;
        }
      }

      setCurrentIndex(activeSection);
    };

    // Use requestAnimationFrame for smoother performance
    let ticking = false;
    const updateIndex = () => {
      handleScroll();
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateIndex);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sections.length]);

  return (
    <div className="relative bg-black">
      {/* Scroll Sections */}
      {sections.map((section) => (
        <ScrollSection 
          key={section.index} 
          {...section} 
          currentIndex={currentIndex}
          totalSections={sections.length}
        />
      ))}

      {/* Static section after scroll sections */}
      <Testimonials />
    </div>
  );
};

export default IdealForSection;