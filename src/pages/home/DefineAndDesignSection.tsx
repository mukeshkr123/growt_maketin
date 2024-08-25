import { Suspense } from "react";
import UserProfile from "./UserProfile";


export default function DefineAndDesignSection() {
    return (
        <>
            <div className="relative flex h-[345px] items-center justify-center bg-[url('/public/images/dd_bg.svg')] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5">
                <div className="container-xs mb-1.5 flex justify-center max-w-6xl mx-auto px-7 md:px-5">
                    <img src="/icons/our_dd.svg" alt="" className="absolute -top-10 left-[10%]" />
                    <div className="flex w-full gap-[130px] md:flex-col">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            <UserProfile
                                imageUrl={"images/pencil.png"}
                                headingText="Define"
                                textClassName="text-[#FC69FF]"
                                descriptionText="We delve deep into your goals, your target audience, and brand vision."
                                className="h-[144px] md:h-auto"
                            />
                            <UserProfile
                                headingText="Design"
                                imageUrl={"images/design.png"}
                                textClassName="text-[#FFC774]"
                                descriptionText="Leveraging market research, we create a tailored content plan and optimize your profile for maximum impact."
                                className="h-[144px] md:h-auto"
                            />
                            <UserProfile
                                headingText="Develop"
                                imageUrl={"images/deliver.png"}
                                textClassName="text-[#9BFF92]"
                                descriptionText="We implement the plan, track progress, and refine our approach for continuous growth."
                                className="h-[144px] md:h-auto"
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}
