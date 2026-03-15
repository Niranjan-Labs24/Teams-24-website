import { Check } from "lucide-react"
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
        <section className="w-full bg-white py-8 md:py-12 xl:py-[3vw] px-4 xl:px-[2vw]">
            <div className="max-w-7xl xl:max-w-none xl:w-[90vw] mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12 xl:mb-[3.5vw]">
                    <p className="text-[#8E8E93] text-sm md:text-base xl:text-[1.2vw] mb-2 xl:mb-[0.5vw] font-medium">Problem and solutions</p>
                    <h2 
                        className="text-[32px] md:text-[56px] xl:text-[4vw] font-normal tracking-[-0.04em] leading-[1.1] xl:leading-[4.2vw] text-[#1A1A1A]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                        Your problem, our solution
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-[3vw] items-stretch justify-center w-full max-w-[1210px] xl:max-w-none xl:w-[85vw]">
                    {/* Left Side - Solution Card */}
                    <div className="relative flex-shrink-0 mx-auto lg:mx-0 order-2 lg:order-1 w-full lg:w-[40%] xl:w-[35vw] xl:min-h-[38vw]">
                        {/* Background Icons - Fluid placement */}
                        <div 
                            className="absolute z-10 pointer-events-none xl:w-[7vw] xl:h-[7vw] xl:top-[1.5vw] xl:left-[-2.5vw] brightness-0 invert"
                            style={{ opacity: 1 }}
                        >
                            <Image
                                src="/solutionicon.png"
                                alt=""
                                fill
                                className="object-contain hidden xl:block"
                            />
                        </div>
                        <div 
                            className="absolute z-10 pointer-events-none xl:w-[9vw] xl:h-[9vw] xl:bottom-[2vw] xl:right-[-2vw] brightness-0 invert"
                            style={{ opacity: 1 }}
                        >
                            <Image
                                src="/solutionicon.png"
                                alt=""
                                fill
                                className="object-contain hidden xl:block"
                            />
                        </div>

                        <div 
                            className="relative h-full w-full rounded-[31px] xl:rounded-[2vw] border-[1.01px] xl:border-[0.1vw] border-white/20 bg-gradient-to-br from-[#2E8BFF] via-[#1E70F5] to-[#1255C9] shadow-[0_20px_50px_rgba(30,112,245,0.1)] overflow-hidden"
                        >
                            <div className="relative z-20 h-full w-full p-8 md:p-10 xl:p-[3vw] flex flex-col justify-center">
                                {/* Teams24 Logo */}
                                <div className="flex items-center justify-center gap-2 xl:gap-[0.5vw] mb-8 xl:mb-[2.5vw]">
                                    <div className="relative w-5 h-5 xl:w-[1.5vw] xl:h-[1.5vw]">
                                        <Image 
                                            src="/logo.png" 
                                            alt="Teams24" 
                                            fill
                                            className="object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <span 
                                        className="text-white font-normal xl:text-[1.8vw] xl:leading-[1.4]"
                                        style={{ 
                                            fontFamily: "'Dyson Sans Modern', sans-serif",
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        Teams24
                                    </span>
                                </div>

                                {/* Content Card Area */}
                                <div 
                                    className="relative w-full rounded-[28px] xl:rounded-[1.8vw] border-[0.81px] xl:border-[0.1vw] border-white/30 backdrop-blur-[2.9px] flex flex-col mx-auto"
                                    style={{ 
                                        backgroundColor: '#043A7952'
                                    }}
                                >
                                    <h3 
                                        className="text-white font-normal text-[22px] md:text-[26px] xl:text-[2vw] xl:leading-[1.2] px-6 xl:px-[2.5vw] mt-10 xl:mt-[3vw] mb-6 xl:mb-[2vw]"
                                        style={{ 
                                            fontFamily: "'Space Grotesk', sans-serif",
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        Your only personal hiring partner !
                                    </h3>

                                    <div className="space-y-4 xl:space-y-[1.2vw] flex-grow justify-center flex flex-col px-6 xl:px-[2.5vw] pb-10 xl:pb-[3.5vw]">
                                        {solutions.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 xl:gap-[0.8vw]">
                                                <div className="flex-shrink-0 mt-1 xl:mt-[0.3vw]">
                                                    <div className="bg-[#00C065] rounded-full p-0.5 xl:p-[0.1vw] shadow-sm flex items-center justify-center">
                                                        <Check className="w-3.5 h-3.5 xl:w-[1.2vw] xl:h-[1.2vw] text-white stroke-[3]" />
                                                    </div>
                                                </div>
                                                <p className="text-white/95 text-base md:text-[18px] xl:text-[1.3vw] font-medium tracking-tight leading-tight">
                                                    {item}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Problem List Container */}
                    <div 
                        className="bg-[#FDFDFD] border border-[#00000014] rounded-[26px] xl:rounded-[2vw] flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-2 w-full lg:w-[60%] xl:w-[50vw] xl:min-h-[38vw] relative overflow-hidden flex flex-col justify-center p-6 md:p-10 xl:p-[4vw]"
                    >
                        {/* We use relative positioning for the full timeline container mapping the absolute circle overlaps cleanly */}
                        <div className="flex flex-col gap-8 md:gap-10 xl:gap-[3vw] w-full relative">
                            {problems.map((problem) => (
                                <div key={problem.id} className="relative w-full group isolate">
                                    {/* Number Circle positioned exactly atop the upper-left corner overlap - increased size */}
                                    <div 
                                        className="absolute z-20 w-[50px] h-[50px] md:w-[64px] md:h-[64px] xl:w-[4.5vw] xl:h-[4.5vw] rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF413A] flex items-center justify-center text-white text-xl md:text-2xl xl:text-[1.8vw] font-bold border-4 xl:border-[0.3vw] border-[#FDFDFD] shadow-sm transform -translate-x-1/2 -translate-y-1/2 left-0 top-0"
                                    >
                                        {problem.id}
                                    </div>
                                    
                                    {/* Content Wrapper naturally padding around the overlapping badge natively */}
                                    <div 
                                        className="w-full min-h-[88px] md:min-h-[106px] xl:min-h-[8vw] bg-[#FDFDFD] border border-[#00000014] rounded-[26px] xl:rounded-[2vw] rounded-tl-sm xl:rounded-tl-[0.5vw] flex items-center px-6 md:px-10 xl:px-[4vw] py-5 xl:py-[2.5vw] relative z-10 hover:shadow-md transition-shadow"
                                    >
                                        <p 
                                            className="text-[#3A3A3C] font-normal text-base md:text-[18px] xl:text-[1.5vw] xl:leading-[1.5] ml-4 md:ml-6 xl:ml-[1vw]"
                                            style={{ 
                                                fontFamily: "'Space Grotesk', sans-serif",
                                                letterSpacing: '-0.05em'
                                            }}
                                        >
                                            {problem.text}
                                            <span className="text-[#FF413A] ml-1 xl:ml-[0.5vw]">{problem.highlight}</span>
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
