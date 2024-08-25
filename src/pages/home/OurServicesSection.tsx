import { Text } from '../../components/text'
import { Heading } from '../../components/Heading'
import { PricingCard } from '../../components/PricingCard'
import { Buttons } from './buttons'

export const OurServicesSection = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center self-stretch rounded-[60px] border-t border-solid border-blue-a100 bg-black-900 px-14 py-16 md:p-5">
                <div className="mb-1 flex w-[86%] flex-col items-center md:w-full relative">
                    <div className="flex items-start justify-end self-stretch md:flex-col">
                        <Heading as="h2" className='text-[#FC69FF] font-semibold text-5xl'>About Us</Heading>
                        <div className="mt-[22px] flex w-[42%] rotate-[15deg] justify-end self-end md:w-full md:self-auto">
                            <img src="/icons/we-care.svg" alt="" className='absolute -mt-16' />
                        </div>
                    </div>
                    <div className="container-xs md:px-5 mt-10">
                        <Text size="text2x1" as="p" className="text-center leading-9">
                            We are a team of dynamic marketing experts who aim to revamp and boost your LinkedIn profiles with powerful personal branding. Whether you are a CEO or have a business page, we assist you with a solid presence on LinkedIn. Our strategic content production and data-driven strategy guarantee that your message reaches the proper audience and produces the desired outcomes.
                        </Text>
                    </div>
                </div>
            </div>

            <div className="container-xs mt-3 flex flex-col items-center px-14 md:px-5 gap-y-24">
                <Heading as="h3" className="text-[#C6FF69]">
                    Our Services
                </Heading>

                <div className="flex gap-8 mx-auto max-w-6xl items-center">
                    <PricingCard
                        title="Starter"
                        price="$499"
                        billingCycle="Month"
                        description="Great for"
                        more="But sometimes, even the coolest tools need a little "
                        features={[
                            '1 Post/week',
                            'Profile Optimization',
                            'List creation',
                            'Top Voice Badge *',
                            'LinkedIn Premium 1',
                            '1 - half-hour session',
                        ]}
                    />
                    <PricingCard
                        title="Standard"
                        price="$499"
                        billingCycle="Month"
                        description="Great for"
                        more="But sometimes, even the coolest tools need a little "
                        features={[
                            '1 Post/week',
                            'Profile Optimization',
                            'List creation',
                            'Top Voice Badge *',
                            'LinkedIn Premium 1',
                            '1 - half-hour session',
                        ]}
                        isActive={true}
                    />
                    <PricingCard
                        title="Growth"
                        price="$499"
                        billingCycle="Month"
                        description="Great for"
                        more="But sometimes, even the coolest tools need a little "
                        features={[
                            '1 Post/week',
                            'Profile Optimization',
                            'List creation',
                            'Top Voice Badge *',
                            'LinkedIn Premium 1',
                            '1 - half-hour session',
                        ]}
                    />
                </div>
            </div>

            <div className="container-xs mt-[70px] flex flex-col items-center px-14 md:px-5">
                <Buttons />
            </div>
        </div >

    )
}
