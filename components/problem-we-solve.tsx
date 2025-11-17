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
  const [isInView, setIsInView] = useState(false)
  const [isManualMode, setIsManualMode] = useState(false)
  const sectionRef = useRef(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // Animation configurations
  const animationConfig = {
    without: {
      start: 10,   // Changed from 0 to 10 - start at 10%
      end: 85,     // End at 85%
      duration: 1500, // 1.5 seconds per step
      steps: 20
    },
    with: {
      start: 65,   // Start from 65%
      end: 25,     // End at 25%
      duration: 1500, // 1.5 seconds per step
      steps: 20
    }
  }

  const handleToggle = (withTeams: boolean) => {
    setIsWithTeams24(withTeams)
    setIsManualMode(false)
    
    // Clear any existing animation
    if (animationRef.current) {
      clearTimeout(animationRef.current)
      animationRef.current = null
    }
    
    // Reset to starting position
    const config = withTeams ? animationConfig.with : animationConfig.without
    const startingValue = calculateValueFromPercentage(config.start, withTeams)
    setSliderValue(startingValue)
    setAnimatedValues({ metric1: 0, metric2: 0, metric3: 0 })
    
    // Restart animation if section is in view
    if (isInView && !isManualMode) {
      startAutoAnimation(withTeams)
    }
  }

  // Handle manual click on track
  const handleTrackClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return
    
    setIsManualMode(true)
    stopAutoAnimation()
    
    const trackRect = trackRef.current.getBoundingClientRect()
    const clickX = event.clientX - trackRect.left
    const trackWidth = trackRect.width
    const percentage = (clickX / trackWidth) * 100
    
    // Ensure percentage is within bounds
    const clampedPercentage = Math.max(0, Math.min(100, percentage))
    
    const newValue = calculateValueFromPercentage(clampedPercentage, isWithTeams24)
    setSliderValue(newValue)
    
    // Calculate and animate metrics
    const metrics = calculateMetricsFromValue(newValue, isWithTeams24)
    animateNumbers(metrics)
  }

  // Calculate value from percentage
  const calculateValueFromPercentage = (percentage: number, withTeams: boolean) => {
    const range = withTeams ? 48 - 1 : 12 - 1
    return Math.round(1 + (percentage / 100) * range)
  }

  // Calculate percentage from value
  const calculatePercentageFromValue = (value: number, withTeams: boolean) => {
    const range = withTeams ? 48 - 1 : 12 - 1
    return ((value - 1) / range) * 100
  }

  // Animate numbers with counting effect
  const animateNumbers = (targetValues: { metric1: number; metric2: number; metric3: number }, duration: number = 1000) => {
    const steps = 60
    const stepDuration = duration / steps
    const stepIncrements = {
      metric1: targetValues.metric1 / steps,
      metric2: targetValues.metric2 / steps,
      metric3: targetValues.metric3 / steps
    }

    let currentStep = 0
    const numberAnimation = setInterval(() => {
      currentStep++
      
      setAnimatedValues({
        metric1: Math.round(stepIncrements.metric1 * currentStep),
        metric2: Math.round(stepIncrements.metric2 * currentStep),
        metric3: Math.round(stepIncrements.metric3 * currentStep)
      })

      if (currentStep >= steps) {
        clearInterval(numberAnimation)
        setAnimatedValues(targetValues)
      }
    }, stepDuration)
  }

  // Start automatic animation
  const startAutoAnimation = (withTeams: boolean) => {
    if (animationRef.current) {
      clearTimeout(animationRef.current)
    }

    const config = withTeams ? animationConfig.with : animationConfig.without
    let currentPercentage = config.start
    const stepSize = (config.end - config.start) / config.steps
    let currentStep = 0

    const animateStep = () => {
      if (isManualMode) return // Stop if manual mode is active
      
      currentStep++
      
      // Check if animation should continue
      if ((withTeams && currentPercentage <= config.end) || 
          (!withTeams && currentPercentage >= config.end)) {
        // Animation complete
        return
      }

      currentPercentage += stepSize
      
      // Ensure we don't overshoot the target
      if ((withTeams && currentPercentage < config.end) || 
          (!withTeams && currentPercentage > config.end)) {
        currentPercentage = config.end
      }

      // Update slider value
      const newValue = calculateValueFromPercentage(currentPercentage, withTeams)
      setSliderValue(newValue)

      // Calculate and animate metrics
      const metrics = calculateMetricsFromValue(newValue, withTeams)
      animateNumbers(metrics)

      // Continue animation if not complete
      if ((withTeams && currentPercentage > config.end) || 
          (!withTeams && currentPercentage < config.end)) {
        animationRef.current = setTimeout(animateStep, config.duration)
      }
    }

    // Start the animation
    animationRef.current = setTimeout(animateStep, config.duration)
  }

  // Stop automatic animation
  const stopAutoAnimation = () => {
    if (animationRef.current) {
      clearTimeout(animationRef.current)
      animationRef.current = null
    }
  }

  // Calculate metrics from current value
  const calculateMetricsFromValue = (value: number, withTeams: boolean) => {
    if (withTeams) {
      const costReduction = Math.round((value / 48) * 60)
      const deploymentHours = Math.min(2 + Math.round((value / 48) * 46), 48)
      const successRate = Math.round(90 + (value / 48) * 4)

      return {
        metric1: costReduction,
        metric2: deploymentHours,
        metric3: successRate
      }
    } else {
      const annualCost = Math.round(500000 + (value / 12) * 1130000)
      const monthsLost = Math.round((value / 12) * 12)
      const failureRate = Math.round(50 + (value / 12) * 17)

      return {
        metric1: Math.round(annualCost / 1000), // Convert to thousands for animation
        metric2: monthsLost,
        metric3: failureRate
      }
    }
  }

  // Initialize slider position when component mounts
  useEffect(() => {
    // Set initial position to 10% for "Without Teams 24"
    const initialValue = calculateValueFromPercentage(10, false)
    setSliderValue(initialValue)
    
    // Calculate initial metrics
    const initialMetrics = calculateMetricsFromValue(initialValue, false)
    setAnimatedValues(initialMetrics)
  }, [])

  // Reset to auto animation when section comes back into view (unless in manual mode)
  useEffect(() => {
    if (isInView && !isManualMode) {
      startAutoAnimation(isWithTeams24)
    }
  }, [isInView, isManualMode, isWithTeams24])

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (!isManualMode) {
            startAutoAnimation(isWithTeams24)
          }
        } else {
          setIsInView(false)
          if (!isManualMode) {
            stopAutoAnimation()
          }
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      stopAutoAnimation()
    }
  }, [isWithTeams24, isManualMode])

  // Reset manual mode when switching between With/Without Teams 24
  useEffect(() => {
    setIsManualMode(false)
  }, [isWithTeams24])

  // Calculate display metrics
  const calculateDisplayMetrics = () => {
    if (isWithTeams24) {
      return {
        sliderLabel: "Team deployed in 48 hours",
        sliderMin: 1,
        sliderMax: 48,
        metric1Label: "Team cost reduction",
        metric1Value: `${animatedValues.metric1}%`,
        metric2Label: "Team deployment",
        metric2Value: animatedValues.metric2 > 2 ? `2-${animatedValues.metric2} hours` : "2 hours",
        metric3Label: "Client success rate",
        metric3Value: `${animatedValues.metric3}%`,
      }
    } else {
      const annualCost = 500000 + (sliderValue / 12) * 1130000
      const displayCost = animatedValues.metric1 * 1000 // Convert back from thousands

      return {
        sliderLabel: "Team in Month 12",
        sliderMin: 1,
        sliderMax: 12,
        metric1Label: "Your annual team costs",
        metric1Value: `$${(displayCost / 1000000).toFixed(2)}M+`,
        metric2Label: "Months lost to recruitment",
        metric2Value: `${animatedValues.metric2}-12 months`,
        metric3Label: "First-year failure rate",
        metric3Value: `${animatedValues.metric3}%`,
      }
    }
  }

  const metrics = calculateDisplayMetrics()
  const sliderPercentage = calculatePercentageFromValue(sliderValue, isWithTeams24)

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ minHeight: '1006px' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold text-gray-600 mb-6 lg:mb-8 pb-6 lg:pb-8 border-b border-gray-400">
            The problem we solve
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 lg:mb-12">
            {isWithTeams24 ? "Our solution delivers results." : "Traditional hiring kills momentum."}
          </h3>
        </div>

        {/* Slider Section - Custom Design */}
        <div 
          className="bg-white rounded-3xl border border-[#22222233] p-6 sm:p-8 mb-12 lg:mb-16 mx-auto relative overflow-hidden"
          style={{ 
            maxWidth: '1244px',
            height: 'auto',
            minHeight: '182px'
          }}
        >
          {/* White Reflection Effect */}
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
              mixBlendMode: 'overlay'
            }}
          />

          <div className="flex items-center justify-between mb-4 sm:mb-6 relative z-10">
            <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
              {metrics.sliderLabel}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-gray-500 hidden sm:block">
                {isManualMode ? "Manual mode" : isInView ? "Auto-updating every 1.5s" : "Scroll to activate"}
              </span>
              {isManualMode && (
                <button
                  onClick={() => {
                    setIsManualMode(false)
                    if (isInView) {
                      startAutoAnimation(isWithTeams24)
                    }
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded transition-colors"
                >
                  Reset to auto
                </button>
              )}
            </div>
          </div>

          {/* Custom Slider Track */}
          <div className="relative w-full py-8 sm:py-10">
            {/* Background Track - Clickable */}
            <div className="relative w-full" ref={trackRef}>
              <div 
                className="w-full rounded-xl bg-[#2222220F] relative z-0 cursor-pointer"
                style={{ height: '24px', borderRadius: '12px' }}
                onClick={handleTrackClick}
              >
                {/* Progress Fill - Properly aligned */}
                <div 
                  className="h-full rounded-xl absolute top-0 left-0 z-10"
                  style={{
                    width: `${sliderPercentage}%`,
                    backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                    height: '24px',
                    borderRadius: '12px',
                    boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.3)'
                  }}
                />
              </div>

              {/* Slider Circle */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-20 rounded-full border-4 border-white shadow-lg cursor-pointer"
                style={{
                  left: `${sliderPercentage}%`,
                  backgroundColor: isWithTeams24 ? '#0362D1' : '#FF413A',
                  width: '44px',
                  height: '44px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.5)'
                }}
                onClick={(e) => {
                  e.stopPropagation() // Prevent track click when clicking circle
                }}
              />

              {/* Hidden Input for Accessibility */}
              <input
                type="range"
                min={metrics.sliderMin}
                max={metrics.sliderMax}
                value={sliderValue}
                onChange={() => {}} // Read-only for auto animation
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer z-30"
              />
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-8">
              <span>Day 01</span>
              <span>{metrics.sliderMax === 48 ? "Month 24" : "Month 24"}</span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 max-w-7xl mx-auto">
          {/* Left metric */}
          <div 
            className="border-l-4 pl-4 sm:pl-6 py-2 relative"
            style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}
          >
            {/* White reflection for metric */}
            <div 
              className="absolute left-0 top-0 w-1 h-full opacity-30"
              style={{
                background: 'linear-gradient(to bottom, transparent, white, transparent)'
              }}
            />
            <p className="text-gray-600 text-sm sm:text-base mb-2 sm:mb-3 relative z-10">
              {metrics.metric1Label}
            </p>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black relative z-10">
              {metrics.metric1Value}
            </p>
          </div>

          {/* Right metrics */}
          <div className="space-y-6 sm:space-y-8">
            <div 
              className="border-l-4 pl-4 sm:pl-6 py-2 relative"
              style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}
            >
              <div 
                className="absolute left-0 top-0 w-1 h-full opacity-30"
                style={{
                  background: 'linear-gradient(to bottom, transparent, white, transparent)'
                }}
              />
              <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
                {metrics.metric2Label}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-black relative z-10">
                {metrics.metric2Value}
              </p>
            </div>
            <div 
              className="border-l-4 pl-4 sm:pl-6 py-2 relative"
              style={{ borderColor: isWithTeams24 ? "#0362D1" : "#FF413A" }}
            >
              <div 
                className="absolute left-0 top-0 w-1 h-full opacity-30"
                style={{
                  background: 'linear-gradient(to bottom, transparent, white, transparent)'
                }}
              />
              <p className="text-gray-600 text-sm sm:text-base mb-2 relative z-10">
                {metrics.metric3Label}
              </p>
              <p className="text-xl sm:text-2xl font-bold text-black relative z-10">
                {metrics.metric3Value}
              </p>
            </div>
          </div>
        </div>

        {/* Toggle Buttons with White Reflection */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto relative">
          {/* White reflection background */}
          <div 
            className="absolute inset-0 rounded-full opacity-20 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, transparent 0%, white 50%, transparent 100%)`,
              mixBlendMode: 'overlay',
              top: '-10px',
              bottom: '-10px',
              left: '-10px',
              right: '-10px'
            }}
          />
          
          <button
            onClick={() => handleToggle(false)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative z-10"
            style={{
              backgroundColor: isWithTeams24 ? "#f3f4f6" : "#FF413A",
              color: isWithTeams24 ? "#9ca3af" : "white",
              boxShadow: isWithTeams24 ? 'none' : '0 4px 12px rgba(255, 65, 58, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)'
            }}
          >
            Without Teams 24
          </button>
          <button
            onClick={() => handleToggle(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base relative z-10"
            style={{
              backgroundColor: isWithTeams24 ? "#0362D1" : "#f3f4f6",
              color: isWithTeams24 ? "white" : "#9ca3af",
              boxShadow: isWithTeams24 ? '0 4px 12px rgba(3, 98, 209, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)' : 'none'
            }}
          >
            With Teams 24
          </button>
        </div>
      </div>
    </section>
  )
}