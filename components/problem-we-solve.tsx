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

  // Initial positions
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

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    const trackRect = trackRef.current.getBoundingClientRect()
    const dragX = e.clientX - trackRect.left
    const percentage = (dragX / trackRect.width) * 100
    updateSliderPosition(percentage)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Update slider position
  const updateSliderPosition = (percentage: number) => {
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    const newValue = calculateValueFromPercentage(clampedPercentage, isWithTeams24)
    setSliderValue(newValue)
    const metrics = calculateMetricsFromValue(newValue, isWithTeams24)
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
      const annualCost = Math.round(500000 + (value / 12) * 1130000)
      return {
        metric1: Math.round(annualCost / 1000),
        metric2: Math.round((value / 12) * 12),
        metric3: Math.round(50 + (value / 12) * 17)
      }
    }
  }

  // Intersection Observer for viewport detection
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
  }, [])

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = section.offsetHeight

      const scrollStart = rect.top - windowHeight
      const scrollEnd = rect.bottom
      const scrollRange = scrollEnd - scrollStart
      const currentScroll = -scrollStart
      
      const progress = Math.max(0, Math.min(100, (currentScroll / scrollRange) * 100))
      setScrollProgress(progress)

   
      const shouldBeWithTeams = progress > 50
      if (shouldBeWithTeams !== isWithTeams24) {
        handleToggle(shouldBeWithTeams)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isWithTeams24])

  
  useEffect(() => {
    const initialValue = calculateValueFromPercentage(initialPositions.without, false)
    setSliderValue(initialValue)
    const initialMetrics = calculateMetricsFromValue(initialValue, false)
    setAnimatedValues(initialMetrics)

    
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  // Calculate display
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
    <section ref={sectionRef} className="w-full bg-white py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ minHeight: '62.875rem' }}>
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold text-gray-600 mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-gray-400">
            The problem we solve
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 lg:mb-12">
            {isWithTeams24 ? "Our solution delivers results." : "Traditional hiring kills momentum."}
          </h3>
        </div>

        {/* Slider Section */}
        <div className="bg-white rounded-3xl border border-[#22222233] p-6 sm:p-8 mb-12 lg:mb-16 mx-auto relative overflow-hidden" style={{ maxWidth: '77.75rem', minHeight: '11.375rem' }}>
          
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
            background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
            mixBlendMode: 'overlay'
          }} />

          <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              {metrics.sliderLabel}
            </p>
            <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
              Drag or click to control
            </span>
          </div>

        
          <div className="relative w-full py-8 sm:py-10">
            <div className="relative w-full" ref={trackRef}>
              <div 
                className="w-full rounded-xl bg-[#2222220F] relative z-0 cursor-pointer"
                style={{ height: '1.5rem', borderRadius: '0.75rem' }}
                onClick={handleTrackClick}
              >
                <div 
                  className="h-full rounded-xl absolute top-0 left-0 z-10 transition-all duration-75"
                  style={{
                    width: `${sliderPercentage}%`,
                    backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                    height: '1.5rem',
                    borderRadius: '0.75rem',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)'
                  }}
                />
              </div>

        
              <div
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 rounded-full border-4 border-white shadow-lg cursor-grab active:cursor-grabbing transition-all duration-75"
                style={{
                  left: `${sliderPercentage}%`,
                  backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                  width: '2.75rem',
                  height: '2.75rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.5)'
                }}
                onMouseDown={handleMouseDown}
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-8">
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
              {metrics.metric1Value}
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
                {metrics.metric2Value}
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
                {metrics.metric3Value}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Buttons - Display Only (controlled by scroll) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto relative">
          <div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{
            background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
            mixBlendMode: 'overlay',
            top: '-10px', bottom: '-10px', left: '-10px', right: '-10px'
          }} />
          
          <div
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative z-10 text-center"
            style={{
              backgroundColor: isWithTeams24 ? "#f3f4f6" : "#FF413A",
              color: isWithTeams24 ? "#9ca3af" : "white",
              boxShadow: isWithTeams24 ? 'none' : '0 4px 12px rgba(255, 65, 58, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)'
            }}
          >
            Without Teams 24
          </div>
          <div
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative z-10 text-center"
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