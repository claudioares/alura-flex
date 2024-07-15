type PropsInputType = {
    title: string,
    inputW?: string | undefined
}

export function InputSelect ({title, inputW}:PropsInputType) {
    return(
        <>
            <div className="w-full flex flex-col gap[1.5rem]">
                <label htmlFor="specialty"
                className="font-semibold text-whitepro text-[2rem]"
                >{title}</label>
                <select 
                    id="specialty" 
                    name="specialty"
                    className={`
                        ${inputW} border border-darkgray rounded-[1rem] text-darkgray py-[1.6rem] px-[0.8rem]
                    `}
                >
                    <option value="" >Selecione uma categoria</option>
                    <option value="frontend">Front End</option>
                    <option value="backend">Back End</option>
                    <option value="mobile">Mobile</option>
                </select>
            </div>
        </>
    )
}