import { Text } from "../../components/text";
import { Heading } from "../../components/Heading";

export default function ApproachSection() {
    return (
        <>
            <div className="mt-[66px] flex flex-col items-center max-w-6xl mx-auto" id="our-approach">
                <div className="container-xs flex flex-col items-center gap-[38px] md:px-5">
                    <Heading as="h5" className="text-orange-200 sm:text-3xl">
                        Our Approach
                    </Heading>
                    <Text size="text2x1" as="p" className="sm:text-sm text-center md:text-xl">
                        We believe in a personalized approach that goes beyond surface-level tactics.
                    </Text>
                    <Text size="text2x1" as="p" className="self-stretch text-center leading-9 sm:text-sm sm:-mt-4 md:text-xl">
                        Growth Marketing guarantees your success by employing a tried-and-true strategy to help
                        you reach your objectives and get the outcomes you desire. We work together to determine
                        your goals, provide engaging content, and deliver results that will boost growth and
                        ensure your profile gets noticed.
                    </Text>
                </div>
            </div>
        </>
    );
}
