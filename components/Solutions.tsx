"use client"

import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const Solutions = () => {
    const problems = [
        {
            id: 1,
            text: "Finding and building a perfect team to launch my early stage startup ",
            highlight: "seems like a hectic task"
        },
        {
            id: 2,
            text: "Finding and building a perfect team to launch my early stage startup ",
            highlight: "seems like a hectic task"
        },
        {
            id: 3,
            text: "Finding and building a perfect team to launch my early stage startup ",
            highlight: "seems like a hectic task"
        }
    ]

    const solutions = [
        "Team set in 48 - 72 hours",
        "You spend <$50k in building your dream team",
        "Team set in 48 - 72 hours"
    ]

    return (
        <section className="w-full bg-white py-8 md:py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12">
                    <p className="text-[#8E8E93] text-sm md:text-base mb-2 font-medium">Problem and solutions</p>
                    <h2 
                        className="text-[32px] md:text-[56px] font-normal tracking-[-0.04em] leading-[1.1] text-[#1A1A1A]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Your problem, our solution
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch justify-center w-full max-w-[1210px]">
                    {/* Left Side - Solution Card */}
                    <div 
                        className="relative rounded-[31px] border-[1.01px] border-white/20 bg-gradient-to-br from-[#2E8BFF] via-[#1E70F5] to-[#1255C9] shadow-[0_20px_50px_rgba(30,112,245,0.1)] overflow-hidden flex-shrink-0 mx-auto lg:mx-0 order-2 lg:order-1 w-full lg:w-[444px] min-h-[400px] lg:h-[482px]"
                    >
                        <div className="relative h-full w-full p-8 md:p-10 flex flex-col">
                            {/* Decorative Sparkle (Top Left) */}
                            <div className="absolute top-6 left-6 w-8 h-8 opacity-20">
                                <svg viewBox="0 0 24 24" fill="white">
                                    <path d="M12 0l2 10 10 2-10 2-2 10-2-10-10-2 10-2z" />
                                </svg>
                            </div>

                            {/* Teams24 Logo */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className="relative w-7 h-7">
                                    <Image 
                                        src="/logo.png" 
                                        alt="Teams24" 
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                                <span className="text-white text-xl md:text-2xl font-bold tracking-tight">Teams24</span>
                            </div>

                            {/* Content Card Area */}
                            <div className="bg-white/10 backdrop-blur-md rounded-[28px] p-6 md:p-8 border border-white/20 flex-grow flex flex-col">
                                <h3 className="text-white text-xl md:text-2xl font-medium mb-8 leading-tight">
                                    Your only personal hiring partner !
                                </h3>

                                <div className="space-y-5 flex-grow justify-center flex flex-col">
                                    {solutions.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className="flex-shrink-0">
                                                <div className="bg-[#00C065] rounded-full p-1 shadow-sm">
                                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                            <p className="text-white/95 text-base md:text-[18px] font-medium tracking-tight leading-tight">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Problem List */}
                    <div 
                        className="bg-[#F8F9FB] border border-[#EBEBEB] rounded-[26px] p-6 md:p-8 flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-2 w-full lg:w-[725px] h-auto lg:h-[482px]"
                    >
                        <div className="h-full flex flex-col justify-center gap-8 md:gap-10">
                            {problems.map((problem) => (
                                <div key={problem.id} className="flex items-center gap-5 md:gap-6 group">
                                    {/* Number Circle */}
                                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF4B4B] flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-[0_6px_15px_rgba(255,75,75,0.2)]">
                                        {problem.id}
                                    </div>

                                    {/* Text Box */}
                                    <div className="flex-grow bg-white border border-[#F2F2F2] rounded-[20px] md:rounded-[24px] px-6 py-4 md:py-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                        <p className="text-[#3A3A3C] text-sm md:text-base lg:text-[17px] leading-[1.5] font-medium">
                                            {problem.text}
                                            <span className="text-[#FF4B4B]">{problem.highlight}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Solutions;
