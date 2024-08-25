import React from "react";
import { Img } from "../image";
import { Text } from "../text";
import { Heading } from "../Heading";

interface Props {
    className?: string;
    closeImage?: string;
    headingText?: React.ReactNode;
    descriptionText?: React.ReactNode;
    textClassName: string
}

export default function DiscoveryCall({
    closeImage,
    headingText = "Discovery call",
    textClassName,
    descriptionText = "Let's chat! We'll get to know you, your business, and your LinkedIn aspirations.",
    ...props
}: Props) {
    return (
        <div
            {...props}
            className={`flex flex-col  bg-[url('/public/images/prcess_bg.png')] items-start w-full gap-3 px-[30px] py-[22px] sm:p-5 cursor-pointer hover:shadow-bs ${props.className || ""
                }`}

        >
            <Img
                src={closeImage}
                alt="Close Image"
                className="h-[96px] w-[24%] object-contain"
            />
            <Heading size="headingxs" as="h3" className={textClassName}>
                {headingText}
            </Heading>
            <Text size="texts" as="p" className="mb-14 w-full leading-[19px] text-[#CACACA] font-normal text-xl">
                {descriptionText}
            </Text>
        </div>
    );
}
