import React from "react";

const shapes = {
    round: "rounded-md",
} as const;

const variants = {
    gradient: "bg-gradient shadow-sm text-white-a700",
    blue_A700_indigo_A700: "bg-gradient",
    blue_gray_700: "border-blue_gray_700 border border-solid text-white-a700",
    outline: "border-blue_gray_700 border border-solid text-white-a700",
} as const;

const sizes = {
    sm: "h-[44px] px-3.5 text-[16px]",
    xs: "h-[32px] px-[12px] text-[15px]",
    md: "h-[52px] pl-[22px] pr-[32px] text-[18px]",
} as const;

type ButtonProps = Omit<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >,
    "onClick"
> &
    Partial<{
        className: string;
        leftIcon: React.ReactNode;
        rightIcon: React.ReactNode;
        onClick: () => void;
        variant: keyof typeof variants | null;
        shape: keyof typeof shapes;
        size: keyof typeof sizes;
        color: string;
    }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "gradient",
    size = "md",
    color = "blue_gray_700",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-white-a700 ${sizes[size]} ${shapes[shape || "round"]} ${variants[variant || "gradient"]
                }`}
            {...restProps}
        >
            {leftIcon && <>{leftIcon}</>}
            {children}
            {rightIcon && <>{rightIcon}</>}
        </button>
    );
};

export { Button };
