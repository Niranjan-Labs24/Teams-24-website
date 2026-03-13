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
                    <div className="relative flex-shrink-0 mx-auto lg:mx-0 order-2 lg:order-1 w-full xl:w-[444px] 2xl:w-[533px] xl:h-[482px] 2xl:h-[578px]">
                        {/* Background Icons - Increased opacity and visibility */}
                        <div 
                            className="absolute z-10 pointer-events-none xl:w-[90.28px] xl:h-[90.07px] 2xl:w-[108.34px] 2xl:h-[108.08px] xl:top-[19px] xl:left-[-36.08px] 2xl:top-[22.8px] 2xl:left-[-43.3px] brightness-0 invert"
                            style={{ opacity: 1 }}
                        >
                            <Image
                                src="/solutionicon.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div 
                            className="absolute z-10 pointer-events-none xl:w-[117.34px] xl:h-[117.07px] 2xl:w-[140.81px] 2xl:h-[140.48px] xl:top-[379px] xl:left-[370.78px] 2xl:top-[454.8px] 2xl:left-[444.9px] brightness-0 invert"
                            style={{ opacity: 1 }}
                        >
                            <Image
                                src="/solutionicon.png"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div 
                            className="relative h-full w-full rounded-[31px] border-[1.01px] border-white/20 bg-gradient-to-br from-[#2E8BFF] via-[#1E70F5] to-[#1255C9] shadow-[0_20px_50px_rgba(30,112,245,0.1)] overflow-hidden"
                        >
                            <div className="relative z-20 h-full w-full p-8 md:p-10 flex flex-col">
                                {/* Teams24 Logo */}
                                <div className="flex items-center justify-center gap-2 mb-8">
                                    <div className="relative w-5 h-5">
                                        <Image 
                                            src="/logo.png" 
                                            alt="Teams24" 
                                            fill
                                            className="object-contain brightness-0 invert"
                                        />
                                    </div>
                                    <span 
                                        className="text-white font-normal xl:text-[20px] 2xl:text-[24px] xl:leading-[24px] 2xl:leading-[29px]"
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
                                    className="relative xl:w-[380px] 2xl:w-[456px] xl:h-[352px] 2xl:h-[422px] rounded-[28px] border-[0.81px] border-white/30 backdrop-blur-[2.9px] flex flex-col mx-auto"
                                    style={{ 
                                        backgroundColor: '#043A7952',
                                        marginTop: 'auto' 
                                    }}
                                >
                                    <h3 
                                        className="text-white font-normal xl:text-[22px] 2xl:text-[26px] xl:leading-[24px] 2xl:leading-[29px] xl:w-[307px] 2xl:w-[368px] xl:mt-[31px] xl:ml-[34px] 2xl:mt-[37px] 2xl:ml-[41px]"
                                        style={{ 
                                            fontFamily: "'Space Grotesk', sans-serif",
                                            letterSpacing: '-0.05em'
                                        }}
                                    >
                                        Your only personal hiring partner !
                                    </h3>

                                    <div className="space-y-4 flex-grow justify-center flex flex-col xl:pl-[34px] 2xl:pl-[41px] xl:pb-[31px] 2xl:pb-[37px]">
                                        {solutions.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="flex-shrink-0">
                                                    <div className="bg-[#00C065] rounded-full p-0.5 shadow-sm flex items-center justify-center">
                                                        <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
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
                    </div>

                    {/* Right Side - Problem List */}
                    <div 
                        className="bg-[#FDFDFD] border border-[#00000014] rounded-[26px] flex-shrink-0 mx-auto lg:mx-0 order-1 lg:order-2 w-full xl:w-[725px] 2xl:w-[870px] xl:h-[482px] 2xl:h-[578px] relative overflow-hidden"
                    >
                        <div className="absolute xl:top-[40px] 2xl:top-[48px] xl:left-[50px] 2xl:left-[60px] xl:w-[625px] 2xl:w-[750px] flex flex-col xl:gap-[32px] 2xl:gap-[38px]">
                            {problems.map((problem) => (
                                <div key={problem.id} className="relative xl:w-[625px] 2xl:w-[750px] xl:h-[113px] 2xl:h-[136px]">
                                    {/* Number Circle - Positioned higher with less distance from top */}
                                    <div className="absolute xl:top-[10px] 2xl:top-[12px] xl:left-0 2xl:left-0 xl:w-[50px] 2xl:w-[60px] xl:h-[50px] 2xl:h-[60px] rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF413A] flex items-center justify-center text-white text-lg md:text-xl font-bold border border-[#0000000F] shadow-sm">
                                        {problem.id}
                                    </div>

                                    {/* Text Box - Positioned lower with more distance from top, sharp top-left "edge" */}
                                    <div 
                                        className="xl:w-[566px] 2xl:w-[679px] xl:h-[88px] 2xl:h-[106px] bg-[#FDFDFD] border border-[#00000014] rounded-tr-[26px] rounded-br-[26px] rounded-bl-[26px] absolute xl:left-[59px] 2xl:left-[71px] xl:top-[25px] 2xl:top-[30px] flex items-center px-8"
                                    >
                                        <p 
                                            className="text-[#3A3A3C] font-normal xl:text-[18px] 2xl:text-[22px] xl:leading-[24px] 2xl:leading-[29px]"
                                            style={{ 
                                                fontFamily: "'Space Grotesk', sans-serif",
                                                letterSpacing: '-0.05em'
                                            }}
                                        >
                                            {problem.text}
                                            <span className="text-[#FF413A]">{problem.highlight}</span>
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
