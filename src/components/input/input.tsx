type PropsInputType = {
    title: string,
    inputW?: string | undefined,
    placeholder: string
}

export function Input ({ title, inputW='w-[47rem]', placeholder}:PropsInputType) {
    return(
        <>
            <div className="w-full flex flex-col gap[1.5rem]">
                <label htmlFor="title" className="font-semibold text-whitepro text-[2rem]">{title}</label>
                <input type="text" id="title" placeholder={placeholder} className={`
                    bg-darkgray focus:outline-none focus:border-blue
                    ${inputW} border-2 border-lightgray rounded-[1rem] text-lightgray py-[1.6rem] px-[0.8rem]
                `}/>
            </div>
        </>
    )
}