import { Helmet } from "react-helmet"
import { Header } from "../../components/header"
import ApproachSection from "./ApproachSection"
import { ContactSection } from "./contact-section"
import DefineAndDesignSection from "./DefineAndDesignSection"
import { OurServicesSection } from "./OurServicesSection"
import { ProcessSection } from "./process-section"
import { ProfileEnhancementSection } from "./profile-enhancement-section"
const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Linkedin Services- Boost your Profile</title>
                <meta
                    name="description"
                    content=""
                />
            </Helmet>
            <div className="w-full bg-black-900 font-bricolage overflow-hidden">
                <div className="mb-1">
                    <div className="h-[770px] sm:h-[700px] relative bg-[url(/public/images/bg+border.svg)] bg-cover bg-no-repeat md:h-auto">
                        <div className="mb-9 flex flex-col gap-[82px] md:gap-[61px] sm:gap-[41px]">
                            <Header />
                            <ProfileEnhancementSection />
                        </div>
                    </div>
                    <div>
                        <OurServicesSection />
                        <ApproachSection />
                        <div className="mt-[80px]">
                            <DefineAndDesignSection />
                        </div>
                    </div>
                </div>
                <div className="mx-7 mt-[97px] sm:mt-12 flex flex-col items-end  gap-[130px] md:mx-0 md:gap-[97px] sm:gap-[65px]">
                    <ProcessSection />
                    <ContactSection />
                </div>
            </div>
        </>
    )
}

export default HomePage