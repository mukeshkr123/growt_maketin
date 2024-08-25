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
            className={`flex flex-col 
                  items-start w-full justify-between bg-[#1919190A] gap-3 px-[30px] py-[22px] sm:p-5 cursor-pointer hover:shadow-bs ${props.className || ""
                }`}
            style={{
                boxShadow: "0px 4px 55.8px 0px #FFFFFF12 inset"
            }}

        >
            <Img
                src={closeImage}
                alt="Close Image"
                className="h-[96px] w-[24%] object-contain"
            />
            <Heading size="headingxs" as="h3" className={textClassName}>
                {headingText}
            </Heading>
            <Text size="texts" as="p" className="mb-5 w-full leading-[19px] text-[#CACACA] font-normal text-xl">
                {descriptionText}
            </Text>
        </div>
    );
}
