type propsButtonType = {
    title: string,
    stateButton?: boolean
}

export function Button ({title, stateButton=false}:propsButtonType) {
    return(
        <>
            <button className={`
                w-[18rem] h-[5.4rem] rounded-xl border 
                ${stateButton ? `border-blue text-blue shadow-shadow-button` : `border text-white`}
            `}>
                {title}
            </button>
        </>
    )
} 