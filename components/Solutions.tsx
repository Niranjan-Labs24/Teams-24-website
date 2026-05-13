import { Check } from "lucide-react"
import Image from "next/image"

const Solutions = () => {
    const problems = [
        {
            id: 1,
            text: "Finding and building a perfect team to launch my early stage startup ",
            highlight: "seems like a hectic task."
        },
        {
            id: 2,
            text: "My developers need more managing than my actual business",
            highlight: "I need a team that takes ownership."
        },
        {
            id: 3,
            text: "We spent months on hiring with zero results. We need a dedicated team",
            highlight: "not more job postings."
        }
    ]

    const solutions = [
        "Team set in 48 - 72 hours",
        "Devs who own the code, join standups & ship",
        "Pre-vetted talent through 5-hour evaluation"
    ]

    return (
        <section id="what-we-do" className="w-full bg-white py-8 md:py-12 xl:py-[3vw]">
            <div className="w-full max-w-[1240px] xl:max-w-none xl:w-[85vw] mx-auto flex flex-col items-center px-6 md:px-12 lg:px-16 xl:px-0">
                {/* Header */}
                <div className="text-center mb-10 md:mb-12 xl:mb-[3.5vw]">
                    <p className="text-[#8E8E93] text-sm md:text-base xl:text-[1.2vw] mb-2 xl:mb-[0.5vw] font-medium">Problem and solutions</p>
                    <h2 
                        className="font-normal tracking-[-0.04em] text-[#1A1A1A]"
                        style={{ 
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "clamp(28px, 2.8vw, 80px)",
                            lineHeight: "1.1"
                        }}
                    >
                        Your problem, our solution
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-[3vw] items-stretch justify-center w-full max-w-[1210px] xl:max-w-none xl:w-[85vw]">
                    {/* Left Side - Problem List Container */}
                    <div 
                        className="bg-[#FDFDFD] border border-[#00000014] rounded-[26px] xl:rounded-[2.03vw] flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-1 w-[95%] sm:w-full max-w-[580px] xl:max-w-none xl:w-[45vw] h-auto md:h-[482px] xl:h-[37.65vw] relative flex flex-col justify-center py-[60px] md:py-0"
                    >
                        <div className="flex flex-col justify-center gap-[60px] md:gap-[40px] xl:gap-[3.12vw] w-full items-end pr-[5%] md:pr-[40px] xl:pr-[3.12vw]">
                            {problems.map((problem) => (
                                <div key={problem.id} className="relative w-[80%] sm:w-auto sm:max-w-[450px] xl:max-w-none xl:w-[35vw] group">
                                    
                                    {/* Number Circle positioned above and to the left of the sharp corner */}
                                    <div 
                                        className="absolute z-20 w-[56px] h-[56px] xl:w-[4.34vw] xl:h-[4.34vw] rounded-full flex items-center justify-center text-white text-[24px] xl:text-[1.86vw] font-medium left-0 top-0 transform -translate-x-[calc(100%+4px)] md:-translate-x-[calc(100%+8px)] xl:-translate-x-[calc(100%+0.6vw)] -translate-y-[28px] md:-translate-y-[32px] xl:-translate-y-[2.1vw]"
                                        style={{
                                            background: "linear-gradient(145deg, #FF7B7B 0%, #FF413A 80%)",
                                            boxShadow: "inset 0px -8px 12px -2px rgba(255, 255, 255, 0.5), inset 0px 6px 12px -2px rgba(255, 255, 255, 0.3), 0 4px 8px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        <span className="relative z-10 drop-shadow-sm">{problem.id}</span>
                                    </div>
                                    
                                    {/* Content Strip with SHARP top-left corner */}
                                    <div 
                                        className="w-full flex items-center min-h-[70px] xl:min-h-[5.47vw] bg-[#FDFDFD] border border-[#00000014] rounded-tr-[20px] xl:rounded-tr-[1.56vw] rounded-br-[20px] xl:rounded-br-[1.56vw] rounded-bl-[20px] xl:rounded-bl-[1.56vw] rounded-tl-none px-[20px] md:px-[30px] xl:px-[2.34vw] py-3 xl:py-[1vw] hover:shadow-sm shadow-sm transition-shadow"
                                    >
                                        <p 
                                            className="text-[#3A3A3C] font-normal text-[14px] md:text-[16px] xl:text-[1.25vw] leading-[20px] md:leading-[24px] xl:leading-[1.87vw]"
                                            style={{ 
                                                fontFamily: "'Space Grotesk', sans-serif",
                                                letterSpacing: '-0.05em'
                                            }}
                                        >
                                            {problem.text}
                                            <span className="text-[#FF413A] ml-[4px] xl:ml-[0.31vw]">{problem.highlight}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Solution Card */}
                    <div 
                        className="relative flex-shrink-0 mx-auto lg:mx-0 order-2 lg:order-2 flex flex-col items-center overflow-hidden w-[95%] sm:w-full max-w-[444px] xl:max-w-none xl:w-[34.68vw] h-auto md:h-[482px] xl:h-[37.65vw] rounded-[31px] xl:rounded-[2.42vw] border-[1.01px] xl:border-[0.08vw] border-[#FFFFFF33] pb-6 md:pb-0 bg-gradient-to-br from-[#2E8BFF] via-[#1E70F5] to-[#1255C9] shadow-[0_20px_50px_rgba(30,112,245,0.1)]"
                    >
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
                            className="absolute z-10 pointer-events-none xl:w-[7vw] xl:h-[7vw] xl:-bottom-[1vw] xl:-right-[2vw] brightness-0 invert"
                            style={{ opacity: 1 }}
                        >
                            <Image
                                src="/solutionicon.png"
                                alt=""
                                fill
                                className="object-contain hidden xl:block"
                            />
                        </div>

                        {/* Top Logo */}
                        <div className="relative mt-[24px] md:mt-[34px] xl:mt-[2.65vw] w-[120px] md:w-[144px] xl:w-[11.25vw] h-[24px] md:h-[28.37px] xl:h-[2.21vw] flex-shrink-0">
                            <Image 
                                src="/logos/NavLogo.webp" 
                                alt="Teams24" 
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Inner Content Card */}
                        <div 
                            className="relative mt-[24px] md:mt-[35.63px] xl:mt-[2.78vw] w-[90%] md:w-[380px] xl:w-[29.68vw] h-auto md:h-[352px] xl:h-[27.5vw] rounded-[28px] xl:rounded-[2.18vw] border-[0.81px] xl:border-[0.06vw] border-[#FFFFFF4D] backdrop-blur-[2.9px] flex flex-col flex-shrink-0 pb-6 md:pb-0"
                            style={{ backgroundColor: '#043A7952' }}
                        >
                            <h3 
                                className="text-white font-normal text-[20px] md:text-[22px] xl:text-[1.71vw] leading-[22px] md:leading-[24px] xl:leading-[1.87vw] mt-[24px] md:mt-[31px] xl:mt-[2.42vw] mx-auto md:mx-[34px] xl:mx-[2.65vw] w-[90%] md:w-[307px] xl:w-[23.98vw]"
                                style={{ 
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    letterSpacing: '-0.05em'
                                }}
                            >
                                Your only personal hiring partner !
                            </h3>

                            <div className="flex-grow flex flex-col justify-center px-[5%] md:px-[34px] xl:px-[2.65vw] mt-[20px] md:mt-0 space-y-[12px] md:space-y-[16px] xl:space-y-[1.25vw]">
                                {solutions.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-[10px] md:gap-[12px] xl:gap-[0.93vw]">
                                        <div className="flex-shrink-0 mt-[2px] xl:mt-[0.15vw]">
                                            <div className="bg-[#00C065] rounded-full p-[2px] xl:p-[0.15vw] shadow-sm flex items-center justify-center">
                                                <Check className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] xl:w-[1.09vw] xl:h-[1.09vw] text-white stroke-[3]" />
                                            </div>
                                        </div>
                                        <p 
                                            className="text-white/95 text-[16px] md:text-[18px] xl:text-[1.4vw] leading-[20px] md:leading-[24px] xl:leading-[1.87vw] font-normal"
                                            style={{ 
                                                fontFamily: "'Space Grotesk', sans-serif",
                                                letterSpacing: '-0.05em'
                                            }}
                                        >
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Solutions;
