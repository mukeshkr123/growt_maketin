import { Img } from "../image"
import { Text } from "../text"

interface Props {
    className?: string
}

export const Header = ({ ...props }: Props) => {
    return (
        <header
            {...props}
            className={`${props.className} flex items-center mt-6 px-16 md:mx-0 md:px-0 border-solid bg-black-900_05 relative
            `}
        >
            <div className="flex w-full items-center justify-between md:justify-start gap-5 md:flex-col">
                <Img
                    src="images/logo.svg"
                    alt="Header Logo"
                    className="h-[50px] w-[200px] object-contain sm:mr-40"
                />
                <ul className="mb-2 flex flex-wrap gap-10 self-end md:self-auto md:hidden">
                    <li>
                        <a href="#about-us">
                            <Text as="p" className="text-white-a700 text-base font-normal">
                                About Us
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#service">
                            <Text as="p" className="text-white-a700 text-base font-normal">
                                Service
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#our-approach">
                            <Text as="p" className="text-white-a700 text-base font-normal">
                                Our Approach
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#process">
                            <Text as="p" className="text-white-a700 text-base font-normal">
                                Process
                            </Text>
                        </a>
                    </li>
                </ul>
                <button
                    className="rounded-md font-medium text-base text-white px-5 py-2 md:hidden"
                    style={{
                        background: `
                         linear-gradient(0deg, #0164C6, #0164C6),
                         linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)
                         `,
                        boxShadow: `
                         0px 0px 0px 1px #377FFB,
                         0px 1px 2px 0px #253EA77A
                         `,
                    }}>
                    <a href="#contact-us">
                        Contact us
                    </a></button>
            </div>
        </header>
    )
}
