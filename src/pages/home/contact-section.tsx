import Spline from "@splinetool/react-spline"

export const ContactSection = () => {
    return (
        <section className="w-full max-w-6xl mx-auto mb-40" >
            <div className="max-w-5xl mx-auto flex flex-col gap-y-6">
                <h3 className="text-white text-4xl text-center font-semibold">Contact us</h3>
                <p className="text-[#CACACA] text-2xl text-center sm:text-base sm:px-6">
                    Contact us today for a free consultation and unlock the true power of your LinkedIn profile with us. Book a call right now.
                </p>
            </div>

            <div className="mt-24 flex w-full max-w-7xl mx-auto items-center md:flex-col" id="contact-us">
                <div className="flex-1">
                    <form className="flex w-full flex-col placeholder:text-[#656565] gap-y-2 max-w-lg md:min-w-[320px]">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className="bg-[#080C12] border-b border-[#656565] text-white placeholder:text-[#656565] focus:border-[#0164C6] focus:border-b-2 focus:outline-none py-2.5"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            className="bg-[#080C12] border-b border-[#656565] text-white placeholder:text-[#656565] focus:border-[#0164C6] focus:border-b-2 focus:outline-none py-2.5"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            className="bg-[#080C12] border-b border-[#656565] text-white placeholder:text-[#656565] focus:border-[#0164C6] focus:border-b-2 focus:outline-none py-2.5"
                        />
                        <input
                            type="text"
                            name="linkedin"
                            placeholder="LinkedIn ID"
                            className="bg-[#080C12] border-b border-[#656565] text-white placeholder:text-[#656565] focus:border-[#0164C6] focus:border-b-2 focus:outline-none py-2.5"
                        />
                        <input
                            type="text"
                            name="source"
                            placeholder="How did you hear about us"
                            className="bg-[#080C12] border-b border-[#656565] text-white placeholder:text-[#656565] focus:border-[#0164C6] focus:border-b-2 focus:outline-none py-2.5"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={3}
                            className="bg-[#080C12] border-b border-[#656565] text-white placeholder:text-[#656565] focus:border-[#0164C6] focus:border-b-2 focus:outline-none py-2.5"
                        ></textarea>
                        <div className="w-full items-center mt-8 flex justify-center">
                            <button
                                className="text-lg py-2.5 px-4 rounded-lg font-normal text-white uppercase"
                                style={{
                                    background: `
                                    linear-gradient(0deg, #0164C6, #0164C6),
                                    linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)
                                    `,
                                    boxShadow: `
                                    0px 0px 0px 1px #377FFB,
                                    0px 1px 2px 0px #253EA77A
                                    `,
                                }}
                            >
                                Send your response
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-[40%] sm:mt-12 aspect-square sm:hidden">
                    <Spline scene="https://prod.spline.design/9oNkd1gOHxweIf9w/scene.splinecode" />
                </div>
            </div>
        </section>
    )
}
