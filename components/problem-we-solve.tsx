"use client"

import { useState, useEffect, useRef } from "react"

const AnimatedNumber = ({ value, suffix = "", prefix = "", isInView }: { value: number, suffix?: string, prefix?: string, isInView: boolean }) => {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (!isInView) return;

    let start = display;
    
    
    if (!hasAnimated) {
      start = 0;
      setHasAnimated(true);
    }

    const end = value;
    if (start === end) {
      setDisplay(end);
      return;
    }

    const duration = hasAnimated ? 150 : 800; 
    const startTime = performance.now();

    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); 
      const current = Math.floor(start + (end - start) * ease);
      setDisplay(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, isInView]);

  return <span>{prefix}{display}{suffix}</span>;
};

export function ProblemWeSolve() {
  const [isWithTeams24, setIsWithTeams24] = useState(false)
  const [percentage, setPercentage] = useState(65) 
  const [animatedValues, setAnimatedValues] = useState({
    metric1: 0,
    metric2: 0,
    metric3: 0
  })
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  const isWithTeams24Ref = useRef(isWithTeams24)
  const percentageRef = useRef(65)

  useEffect(() => {
    isWithTeams24Ref.current = isWithTeams24
  }, [isWithTeams24])

  useEffect(() => {
    percentageRef.current = percentage
    setAnimatedValues(calculateMetricsFromPercentage(percentage, isWithTeams24))
  }, [percentage, isWithTeams24])

  const calculateMetricsFromPercentage = (pct: number, withTeams: boolean) => {
   
    const normalized = (pct - 30) / (65 - 30) 
    
    if (withTeams) {
      
      const value = Math.round(48 - normalized * 47) 
      return {
        metric1: Math.round((value / 48) * 60),
        metric2: Math.min(2 + Math.round((value / 48) * 46), 48),
        metric3: Math.round(90 + (value / 48) * 4)
      }
    } else {
      
      const value = Math.round(1 + normalized * 11) 
      const baseCost = 10000 
      const growthPerMonth = 8500 
      const annualCost = baseCost + (value - 1) * growthPerMonth
      
      return {
        metric1: Math.round(annualCost),
        metric2: Math.round((value / 12) * 12),
        metric3: Math.round(50 + (value / 12) * 17)
      }
    }
  }

  const handleToggle = (withTeams: boolean) => {
    setIsWithTeams24(withTeams)
    setPercentage(withTeams ? 30 : 65) 
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 } 
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false

    const handleScroll = () => {
      if (!sectionRef.current) return
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = sectionRef.current?.getBoundingClientRect()
          if (!rect) {
            ticking = false
            return
          }

          const viewHeight = window.innerHeight
          const sectionHeight = rect.height
          
          
          const totalTravel = viewHeight + sectionHeight
          const distanceTraveled = viewHeight - rect.top
          const rawProgress = Math.min(Math.max(distanceTraveled / totalTravel, 0), 1)
          
          
          const ANIMATION_DURATION = 0.9 
          let currentPct;
          
          if (rawProgress <= ANIMATION_DURATION) {
            const phaseProgress = rawProgress / ANIMATION_DURATION
            currentPct = 65 - (phaseProgress * (65 - 30))
          } else {
            currentPct = 30
          }

          setPercentage(currentPct)
          
          
          const newIsWithTeams24 = currentPct <= 47.5
          if (newIsWithTeams24 !== isWithTeams24Ref.current) {
            setIsWithTeams24(newIsWithTeams24)
          }

          ticking = false
        })
        ticking = true
      }
    }

    
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [isInView])

  const metrics = isWithTeams24 ? {
    sliderLabel: "Team deployed in 48 hours",
    metric1Label: "Team cost reduction",
    metric2Label: "Team deployment", 
    metric3Label: "Client success rate",
  } : {
    sliderLabel: "Team in Month 12",
    metric1Label: "Your annual team costs",
    metric2Label: "Months lost to recruitment",
    metric3Label: "First-year failure rate",
  }

  return (
    <section 
      id="problem-we-solve" 
      ref={sectionRef} 
      className="relative w-full bg-white pt-16 md:pt-24 lg:pt-36 pb-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 lg:min-h-[62.875rem] z-10 overflow-hidden"
    >
     
      <div className="absolute top-0 left-0 right-0 z-30 px-6 lg:px-12 pt-10 lg:pt-14 pointer-events-none">
        <div className="max-w-7xl mx-auto border-t border-gray-300 pt-6">
            <div className="text-gray-600 text-sm font-medium tracking-wider">
              The problem we solve
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-12 lg:mb-16 min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] flex items-center justify-center">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
            {isWithTeams24 ? "Our solution delivers results." : "Traditional hiring kills momentum."}
          </h3>
        </div>

        <div className="bg-white rounded-3xl border border-[#22222233] p-4 sm:p-6 mb-12 lg:mb-16 mx-auto relative overflow-hidden" style={{ maxWidth: '77.75rem', minHeight: '8rem' }}>
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
            mixBlendMode: 'overlay'
          }} />

          <div className="flex items-center justify-between mb-2 sm:mb-4 relative z-10">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              {metrics.sliderLabel}
            </p>
          </div>

          <div className="relative w-full py-4 sm:py-6">
            <div className="relative w-full">
              <div 
                className="w-full rounded-xl bg-[#2222220F] relative z-0"
                style={{ height: '1.25rem', borderRadius: '0.625rem' }}
              >
                <div 
                  className="h-full rounded-xl absolute top-0 left-0 z-10 transition-all duration-75"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                    height: '1.25rem',
                    borderRadius: '0.625rem',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)'
                  }}
                />
              </div>

              <div
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 rounded-full border-4 border-white shadow-lg transition-all duration-75"
                style={{
                  left: `${percentage}%`,
                  backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                  width: '2.5rem',
                  height: '2.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.5)'
                }}
              />
            </div>

            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-6">
              <span>Day 01</span>
              <span>Month 24</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 max-w-7xl mx-auto">
          <div className="border-l-4 pl-4 sm:pl-6 py-2 relative" style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}>
            <div className="absolute left-0 top-0 w-1 h-full opacity-30" style={{
              background: 'linear-gradient(to bottom, transparent, white, transparent)'
            }} />
            <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 relative z-10">
              {metrics.metric1Label}
            </p>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black relative z-10">
              {isWithTeams24 ? (
                <AnimatedNumber value={animatedValues.metric1} suffix="%" isInView={isInView} />
              ) : (
                <AnimatedNumber value={animatedValues.metric1 / 1000} prefix="$" suffix="M+" isInView={isInView} />
              )}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 pl-4 sm:pl-6 py-2 relative" style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}>
              <div className="absolute left-0 top-0 w-1 h-full opacity-30" style={{
                background: 'linear-gradient(to bottom, transparent, white, transparent)'
              }} />
              <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
                {metrics.metric2Label}
              </p>
              <div className="text-xl sm:text-2xl font-bold text-black relative z-10">
                {isWithTeams24 ? (
                  <AnimatedNumber value={animatedValues.metric2} prefix="2-" suffix=" hours" isInView={isInView} />
                ) : (
                  <AnimatedNumber value={animatedValues.metric2} suffix="-12 months" isInView={isInView} />
                )}
              </div>
            </div>
            <div className="border-l-4 pl-4 sm:pl-6 py-2 relative" style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}>
              <div className="absolute left-0 top-0 w-1 h-full opacity-30" style={{
                background: 'linear-gradient(to bottom, transparent, white, transparent)'
              }} />
              <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
                {metrics.metric3Label}
              </p>
              <div className="text-xl sm:text-2xl font-bold text-black relative z-10">
                <AnimatedNumber value={animatedValues.metric3} suffix="%" isInView={isInView} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto relative">
          <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{
            background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
            mixBlendMode: 'overlay',
            top: '-10px', bottom: '-10px', left: '-10px', right: '-10px'
          }} />
          
          <div
            onClick={() => handleToggle(false)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative z-10 text-center cursor-pointer hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: isWithTeams24 ? "#f3f4f6" : "#FF413A",
              color: isWithTeams24 ? "#9ca3af" : "white",
              boxShadow: isWithTeams24 ? 'none' : '0 4px 12px rgba(255, 65, 58, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)'
            }}
          >
            Without Teams 24
          </div>
          <div
            onClick={() => handleToggle(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative z-10 text-center cursor-pointer hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: isWithTeams24 ? "#0362D1" : "#f3f4f6",
              color: isWithTeams24 ? "white" : "#9ca3af",
              boxShadow: isWithTeams24 ? '0 4px 12px rgba(3, 98, 209, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)' : 'none'
            }}
          >
            With Teams 24
          </div>
        </div>
      </div>
    </section>
  )
}
