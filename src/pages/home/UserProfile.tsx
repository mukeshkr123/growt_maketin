import React from "react";
import { Img } from "../../components/image";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/text";

interface Props {
    className?: string;
    headingText?: React.ReactNode;
    descriptionText?: React.ReactNode;
    imageUrl: string;
    textClassName: string
}

export default function UserProfile({
    headingText = "Define",
    descriptionText = "We delve deep into your goals, your target audience, and brand vision.",
    imageUrl,
    textClassName,
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-start w-[32%] md:w-full gap-3`}>
            <Img src={imageUrl} alt="Close Image" className="h-[96px] w-[26%] object-contain" />
            <Heading size="headingxs" as="h3" className={textClassName}>
                {headingText}
            </Heading>
            <Text size="texts" as="p" className="w-full leading-[19px]">
                {descriptionText}
            </Text>
        </div>
    );
}
