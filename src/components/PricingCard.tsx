interface PricingCardProps {
    title: string;
    price: string;
    billingCycle: string;
    description: string;
    features: string[];
    more: string
    isActive?: boolean;
    className?: string;
}


export const PricingCard: React.FC<PricingCardProps> = ({
    title,
    price,
    billingCycle,
    description,
    features,
    more,
    isActive,
    className
}) => {

    return (
        <div
            className={`p-6 relative text-[#B4B4B4] flex flex-col gap-y-4 sm:w-[340px] md:w-[450px] lg:w-[480px] pb-20 ${className} ${isActive ? "h-[620px] border-[#3F90FF] border-[1px]" : " h-[540px]"} `}
            style={{
                background: 'linear-gradient(149.64deg, rgba(25, 25, 25, 0.77) 21.24%, rgba(14, 14, 14, 0.77) 105.43%)',
                borderRadius: '10px',
            }}
        >
            {
                isActive &&
                <img src="/icons/fill-star.svg" alt="" className="absolute -top-7 -right-7" />
            }
            <h4 className="font-normal text-2xl uppercase flex items-center gap-3 mt-3">
                <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10.5198 19.9993C10.3848 17.43 9.44118 15.1974 7.62146 13.383C5.8032 11.5708 3.56816 10.6361 1 10.4982C3.59311 10.4212 5.79953 9.4417 7.62806 7.63172C9.46613 5.81293 10.3716 3.56714 10.5227 1C10.5998 3.58768 11.586 5.78725 13.3881 7.61631C15.199 9.45417 17.4186 10.397 20 10.496C17.4421 10.6545 15.2137 11.5767 13.3947 13.3955C11.5764 15.2135 10.6189 17.4205 10.5198 19.9986V19.9993Z"
                        stroke="white"
                        strokeLinejoin="round"
                    />
                </svg>
                {title}
            </h4>
            <h5 className="text-[#B4B4B4]">
                <span className="text-4xl">{price}</span>{' '}
                <span className="text-2xl">/{billingCycle}</span>
            </h5>
            <div className="mt-3">
                <p className="flex items-center gap-3 text-[#B4B4B4] font-medium text-lg">
                    {description}{' '}
                    <svg
                        width="26"
                        height="13"
                        viewBox="0 0 26 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.28733 6.74131C13.0303 6.86882 6.68981 5.45145 23.6023 5.36574M23.6023 5.36574L12.4863 1.37145M23.6023 5.36574L12.3179 11.3819"
                            stroke="#5BCF75"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>
                </p>
                <p className="text-[#AFAFAF] font-normal text-base">{more}</p>
            </div>
            <div className="border-b border-[#575757] rounded-xl mt-3"></div>
            <ul className="font-normal text-lg flex-col flex gap-y-1.5 mt-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <img src="/icons/sign.svg" alt="" className="size-7" />
                        {feature}
                    </li>
                ))}
            </ul>
            {
                isActive && <div className="bottom-0 absolute w-full flex items-center justify-center">
                    <button className="rounded-t-xl px-10 py-2 uppercase text-[#F5F5F5] mr-8" style={{
                        background: 'linear-gradient(182.67deg, #026BFA 2.14%, #0140FB 97.69%)',
                    }}>
                        Recommended
                    </button>
                </div>
            }
        </div>
    );
};
