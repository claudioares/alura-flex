type PropsInputType = {
    title: string,
    inputW?: string | undefined,
    placeholder: string
}

export function Textarea ({title, placeholder, inputW}:PropsInputType) {
    return(
        <>
            <div className="w-full flex flex-col gap[1.5rem]">
                <label className="font-semibold text-whitepro text-[2rem]" htmlFor={title}>{title}</label>
                <textarea className={`
                    resize-none
                    focus:outline-none focus:border-blue
                    w-[57.3rem] h-[22rem]
                    bg-darkgray
                    ${inputW} border-2 border-lightgray rounded-[1rem] text-lightgray py-[1.6rem] px-[0.8rem]
                `} name={title} id={title} placeholder={placeholder}></textarea>
            </div>
        </>
    )
}