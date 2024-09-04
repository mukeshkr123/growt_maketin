import { Buttons } from "./buttons"

export const ProfileEnhancementSection = () => {
    return (
        <>

            <div className="mr-3.5 flex justify-center md:mr-0 -mt-6 relative sm:mt-1.5">
                <div className="container-xs flex justify-center px-[52px] md:px-5">
                    <div className="w-full">
                        <div>
                            <div className="max-w-4xl mx-auto flex items-center flex-col justify-center text-center gap-y-3 sm:mb-10">
                                <button className="text-white text-sm font-light border sm:text-xs border-[#409FFF63] rounded-full py-2.5 px-4 sm:py-2 sm:px-4">🍾 Making your profile  <span className="text-[#FFC368] font-medium">STAR</span> shine.</button>
                                <h2 className="text-[75px] md:text-[42px] md:leading-normal capitalize font-semibold text-[#E0E0E0] leading-[80px]">Make your <br /> <span className="text-[#3C75FF]">presence</span> speak</h2>
                                <p className="text-white text-xl font-light sm:text-sm">“We improve your <span className="text-[#FFC368] font-semibold">LinkedIn profile</span> by strong personal branding, producing engaging content, and developing recognition with your target audience.”</p>
                            </div>
                            <Buttons />
                        </div>
                    </div>

                </div>

                <img src="/icons/happy.svg" alt="" className="absolute top-2/4 right-3/4 -mt-10 sm:hidden" />
                <img src="/icons/smile.svg" alt="" className="absolute left-1/3 -top-4 mr-10 sm:hidden" />
                {/* <img src="/icons/celebrate.svg" alt="" className="absolute left-2/3 top-2/4 ml-32 mt-10" /> */}
                {/* <img src="/icons/shine.svg" alt="" className="absolute left-1/4 top-2/5  mt-28 sm:hidden" /> */}
                <img src="/icons/fill-star.svg" alt="" className="absolute left-2/3 top-1/5 ml-32 mt-10 sm:hidden" />
                <img src="/icons/linkdein-logo.svg" alt="" className="absolute left-[27%] top-[15%] mb-12 md:hidden" />
            </div>
            <div className="absolute w-full flex items-center justify-center bottom-0 sm:bottom-12 ">
                <img src="/images/linkdein_images.png" className="sm:w-[85%] sm:mx-auto" />
            </div>
        </>


    )
}

