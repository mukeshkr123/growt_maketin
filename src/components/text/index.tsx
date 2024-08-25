import React from "react";

const sizes = {
    textxs: "text-[13px] font-light",
    texts: "text-[16px] font-light",
    textmd: "text-[17px] font-normal not-italic",
    textlg: "text-[19px] font-normal not-italic",
    textxl: "text-[21px] font-light",
    text2x1: "text-[30px] font-light md:text-[28px] sm:text-[26px]",
    text4x1: "text-[79px] font-light md:text-[48px]",
};

export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "textmd",
    ...restProps
}) => {
    const Component = as || "p";
    return (
        <Component className={`text-gray-400_02 font-bricolagegrotesque ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
