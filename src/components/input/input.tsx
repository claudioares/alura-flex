type PropsInputType = {
    title: string,
    inputW?: string | undefined,
    placeholder: string,
    value: string,
    func: any,
}

export function Input ({ title, inputW='w-[47rem]', placeholder, value, func}:PropsInputType) {
    return(
        <>
            <div className="w-full h-auto flex flex-col gap[2.5rem]">
                <label htmlFor="title" className="font-semibold text-whitepro text-[2rem]">{title}</label>
                <input 
                    type="text" 
                    id="title" 
                    placeholder={placeholder} 
                    className={`
                        bg-darkgray focus:outline-none focus:border-blue
                        ${inputW} border-2 border-lightgray rounded-[1rem] 
                        text-lightgray py-[1.6rem] px-[0.8rem]
                    `}
                    value={value}
                    onChange={(e)=>func(e.target.value)}
                />
            </div>
        </>
    )
}