import React, { Suspense } from "react";
import UserProfile from "./UserProfile";

const projectPhasesList = [
    { headingText: "Define", descriptionText: "We delve deep into your goals, your target audience, and brand vision.", className: "text-[#FC69FF]" },
    { headingText: "Design", descriptionText: "We create a strategic roadmap, ensuring your brand stands out." },
    { headingText: "Develop", descriptionText: "We build out the detailed plans, content, and visuals for execution." },
];

export default function DefineAndDesignSection() {
    return (
        <>
            {/* Define and design section */}
            <div className="relative mt-[-30px] flex h-[345px] items-center justify-center bg-[url('/public/images/dd_bg.svg')] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5">
                <div className="container-xs mb-1.5 flex justify-center px-7 md:px-5">
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
                                descriptionText="We create a strategic roadmap, ensuring your brand stands out."
                                className="h-[144px] md:h-auto"
                            />
                            <UserProfile
                                headingText="Develop"
                                imageUrl={"images/deliver.png"}
                                textClassName="text-[#9BFF92]"
                                descriptionText="We build out the detailed plans, content, and visuals for execution."
                                className="h-[144px] md:h-auto"
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}
