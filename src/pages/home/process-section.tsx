import { Suspense } from "react";
import { Text } from "../../components/text";
import DiscoveryCall from "../../components/DiscoveryCall";
import { Heading } from "../../components/Heading";

const servicesGrid = [
    {
        closeImage: "/icons/telephone.png",
        headingText: "Discovery call",
        descriptionText: "Let's chat! We'll get to know you, your business, and your LinkedIn aspirations.",
        textClassName: "text-[#FFBA69]",
    },
    {
        closeImage: "/icons/profile.png",
        headingText: "Profile Transformation",
        descriptionText: "To draw in your target audience, we'll optimize your profile.",
        textClassName: "text-[#C6FF69]"
    },
    {
        closeImage: "/icons/note.png",
        headingText: "Content Calendar Creation",
        descriptionText: "We'll create a regular content plan that speaks to your target audience and captures your unique voice.",
        textClassName: "text-[#69AEFF]"
    },
    {
        closeImage: "/icons/rocket.png",
        headingText: "Implementation and Reporting",
        descriptionText: "To keep an eye on your progress of engagement and content creation, we'll provide you with detailed monthly data. ",
        textClassName: "text-[#B469FF]"

    },
];


export const ProcessSection = () => {
    return (
        <>
            {/* our process section */}
            <div className="flex w-[92%] flex-col gap-12 md:w-full md:px-5">
                <div className="container-xs flex flex-col items-center px-14 md:px-5">
                    <Heading as="h6" className="!text-blue-300 font-semibold text-5xl text-center">
                        Our Process
                    </Heading>
                </div>
                <div className="flex items-start gap-7 md:flex-col">
                    <Text size="text2x1" as="p" className="mt-9 w-[32%] leading-9 md:mt-0 md:w-full text-[#CACACA] font-light">
                        From strategy to execution, we are your dedicated partner in LinkedIn success.
                    </Text>
                    <div className="mr-[74px] grid flex-1 grid-cols-2 gap-7 self-center md:mr-0 md:grid-cols-1 md:self-stretch">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {servicesGrid.map((d, index) => (
                                <DiscoveryCall
                                    {...d}
                                    closeImage={d.closeImage}
                                    key={"discoveryGrid" + index}
                                    textClassName={d.textClassName}
                                    className="rounded-[14px] bg-gray-900_0a shadow-bs hover:shadow-bs"
                                />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}
