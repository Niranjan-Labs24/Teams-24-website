"use client"

import { useState, useEffect, useRef } from "react"

export function ProblemWeSolve() {
  const [isWithTeams24, setIsWithTeams24] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [animatedValues, setAnimatedValues] = useState({
    metric1: 0,
    metric2: 0,
    metric3: 0
  })
  const [isDragging, setIsDragging] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const isDraggingRef = useRef(false)
  const isWithTeams24Ref = useRef(isWithTeams24)

  
  useEffect(() => {
    isWithTeams24Ref.current = isWithTeams24
  }, [isWithTeams24])

 
  const initialPositions = {
    without: 65,  
    with: 25      
  }

  const handleToggle = (withTeams: boolean) => {
    setIsWithTeams24(withTeams)
    const startingValue = calculateValueFromPercentage(initialPositions[withTeams ? 'with' : 'without'], withTeams)
    setSliderValue(startingValue)
    const initialMetrics = calculateMetricsFromValue(startingValue, withTeams)
    setAnimatedValues(initialMetrics)
  }

  // Handle manual click on track
  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return
    
    const trackRect = trackRef.current.getBoundingClientRect()
    const clickX = event.clientX - trackRect.left
    const percentage = (clickX / trackRect.width) * 100
    updateSliderPosition(percentage)
  }

 
  const startDragging = (e: React.MouseEvent | React.TouchEvent) => {
    
    isDraggingRef.current = true
    setIsDragging(true)
  }

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return
    
    
    if (e.cancelable) e.preventDefault()
    
    const trackRect = trackRef.current.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
    const dragX = clientX - trackRect.left
    const percentage = (dragX / trackRect.width) * 100
    updateSliderPosition(percentage)
  }

  const stopDragging = () => {
    isDraggingRef.current = false
    setIsDragging(false)
  }

 
  const updateSliderPosition = (percentage: number) => {
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    const newValue = calculateValueFromPercentage(clampedPercentage, isWithTeams24Ref.current)
    setSliderValue(newValue)
    const metrics = calculateMetricsFromValue(newValue, isWithTeams24Ref.current)
    setAnimatedValues(metrics)
  }

  const calculateValueFromPercentage = (percentage: number, withTeams: boolean) => {
    const range = withTeams ? 47 : 11 // 48-1 or 12-1
    return Math.round(1 + (percentage / 100) * range)
  }

  const calculatePercentageFromValue = (value: number, withTeams: boolean) => {
    const range = withTeams ? 47 : 11
    return ((value - 1) / range) * 100
  }

  const calculateMetricsFromValue = (value: number, withTeams: boolean) => {
    if (withTeams) {
      return {
        metric1: Math.round((value / 48) * 60),
        metric2: Math.min(2 + Math.round((value / 48) * 46), 48),
        metric3: Math.round(90 + (value / 48) * 4)
      }
    } else {
      
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

 
  useEffect(() => {
    window.addEventListener('mousemove', handleMove, { passive: false })
    window.addEventListener('mouseup', stopDragging)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('touchend', stopDragging)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseup', stopDragging)
      window.removeEventListener('touchmove', handleMove)
      window.removeEventListener('touchend', stopDragging)
    }
  }, [])

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
       
          const initialValue = calculateValueFromPercentage(initialPositions.without, false)
          setSliderValue(initialValue)
          const initialMetrics = calculateMetricsFromValue(initialValue, false)
          setAnimatedValues(initialMetrics)
        }
      },
      { threshold: 0.3 } 
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isInView])

  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (e: WheelEvent) => {
      const track = trackRef.current;
      if (track && track.contains(e.target as Node)) {
        e.preventDefault();
        const step = isWithTeams24Ref.current ? 2 : 5;
        const direction = e.deltaY > 0 ? 1 : -1;
        const currentPercentage = calculatePercentageFromValue(sliderValue, isWithTeams24Ref.current);
        updateSliderPosition(currentPercentage + (direction * step));
      }
    };

    section.addEventListener('wheel', onWheel, { passive: false });
    return () => section.removeEventListener('wheel', onWheel);
  }, [sliderValue]);

 
  useEffect(() => {
    const initialValue = calculateValueFromPercentage(initialPositions.without, false)
    setSliderValue(initialValue)
    const initialMetrics = calculateMetricsFromValue(initialValue, false)
    setAnimatedValues(initialMetrics)
  }, [])

  
  const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) => {
    
    const [display, setDisplay] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    useEffect(() => {
      if (!isInView) return;

      let start = display;
      
      // If this is the first animation upon entering view, definitely start from 0
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


  const metrics = isWithTeams24 ? {
    sliderLabel: "Team deployed in 48 hours",
    sliderMin: 1,
    sliderMax: 48,
    metric1Label: "Team cost reduction",
    metric1Value: `${animatedValues.metric1}%`,
    metric2Label: "Team deployment", 
    metric2Value: animatedValues.metric2 > 2 ? `2-${animatedValues.metric2} hours` : "2 hours",
    metric3Label: "Client success rate",
    metric3Value: `${animatedValues.metric3}%`,
  } : {
    sliderLabel: "Team in Month 12",
    sliderMin: 1,
    sliderMax: 12,
    metric1Label: "Your annual team costs",
    metric1Value: `$${(animatedValues.metric1 * 1000 / 1000000).toFixed(2)}M+`,
    metric2Label: "Months lost to recruitment",
    metric2Value: `${animatedValues.metric2}-12 months`,
    metric3Label: "First-year failure rate",
    metric3Value: `${animatedValues.metric3}%`,
  }

  const sliderPercentage = calculatePercentageFromValue(sliderValue, isWithTeams24)

  return (
    <section id="problem-we-solve" ref={sectionRef} className="relative w-full bg-white pt-16 md:pt-24 lg:pt-36 pb-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ minHeight: '62.875rem' }}>
     
      <div className="absolute top-0 left-0 right-0 z-40 px-6 lg:px-12 pt-10 lg:pt-14 pointer-events-none">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 md:gap-6">
                <div className="text-gray-600 text-sm font-medium tracking-wider">
                  The problem we solve
                </div>
                <hr className="w-full border-t border-gray-300" />
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 lg:mb-12">
            {isWithTeams24 ? "Our solution delivers results." : "Traditional hiring kills momentum."}
          </h3>
        </div>

        {/* Slider Section */}
        <div className="bg-white rounded-3xl border border-[#22222233] p-4 sm:p-6 mb-12 lg:mb-16 mx-auto relative overflow-hidden" style={{ maxWidth: '77.75rem', minHeight: '8rem' }}>
          
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
            mixBlendMode: 'overlay'
          }} />

          <div className="flex items-center justify-between mb-2 sm:mb-4 relative z-10">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              {metrics.sliderLabel}
            </p>
            <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
              Drag or click to control
            </span>
          </div>

        
          <div className="relative w-full py-4 sm:py-6">
            <div className="relative w-full" ref={trackRef}>
              <div 
                className="w-full rounded-xl bg-[#2222220F] relative z-0 cursor-pointer"
                style={{ height: '1.25rem', borderRadius: '0.625rem' }}
                onClick={handleTrackClick}
              >
                <div 
                  className="h-full rounded-xl absolute top-0 left-0 z-10 transition-all duration-75"
                  style={{
                    width: `${sliderPercentage}%`,
                    backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                    height: '1.25rem',
                    borderRadius: '0.625rem',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)'
                  }}
                />
              </div>

        
              <div
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 rounded-full border-4 border-white shadow-lg cursor-grab active:cursor-grabbing transition-all duration-75"
                style={{
                  left: `${sliderPercentage}%`,
                  backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                  width: '2.5rem',
                  height: '2.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.5)'
                }}
                onMouseDown={startDragging}
                onTouchStart={startDragging}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-6">
              <span>Day 01</span>
              <span>{isWithTeams24 ? "Month 24" : "Month 24"}</span>
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
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black relative z-10">
              {isWithTeams24 ? (
                <AnimatedNumber value={animatedValues.metric1} suffix="%" />
              ) : (
                <AnimatedNumber value={animatedValues.metric1 / 1000} prefix="$" suffix="M+" />
              )}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 pl-4 sm:pl-6 py-2 relative" style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}>
              <div className="absolute left-0 top-0 w-1 h-full opacity-30" style={{
                background: 'linear-gradient(to bottom, transparent, white, transparent)'
              }} />
              <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
                {metrics.metric2Label}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-black relative z-10">
                {isWithTeams24 ? (
                  <AnimatedNumber value={animatedValues.metric2} prefix="2-" suffix=" hours" />
                ) : (
                  <AnimatedNumber value={animatedValues.metric2} suffix="-12 months" />
                )}
              </p>
            </div>
            <div className="border-l-4 pl-4 sm:pl-6 py-2 relative" style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}>
              <div className="absolute left-0 top-0 w-1 h-full opacity-30" style={{
                background: 'linear-gradient(to bottom, transparent, white, transparent)'
              }} />
              <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
                {metrics.metric3Label}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-black relative z-10">
                <AnimatedNumber value={animatedValues.metric3} suffix="%" />
              </p>
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