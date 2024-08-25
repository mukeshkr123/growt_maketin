import React from "react";

const sizes = {
    text3xl: "text-[37px] font-medium md:text-[35px] sm:text-[33px]",
    headingxs: "text-[30px] font-semibold md:text-[28px] sm:text-[26px]",
    headings: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]",
    headingmd: "text-[37px] font-semibold md:text-[35px] sm:text-[33px]",
    headinglg: "text-[75px] font-semibold md:text-[48px]",
};

export type HeadingProps = Partial<{
    className: string;
    as: keyof JSX.IntrinsicElements;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLSpanElement>,
        HTMLSpanElement
    >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "headings",
    as = "h6",
    ...restProps
}) => {
    const Component = as || "h6";
    return (
        <Component
            className={`text-purple-a100 font-bricolagegrotesque ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };
