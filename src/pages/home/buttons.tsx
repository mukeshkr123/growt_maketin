
export const Buttons = () => {
    return (
        <div className="space-x-5 mt-9 max-w-4xl mx-auto flex items-center justify-center">
            <button
                className="text-lg py-2.5 px-5 rounded-lg font-normal text-white uppercase"
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
                <span className="font-bold">Book your free</span>  consultation
            </button>

            <button className="text-lg text-white border-[#475467] border py-2.5 px-5 rounded-lg">CONTACT US</button>
        </div>)
}
