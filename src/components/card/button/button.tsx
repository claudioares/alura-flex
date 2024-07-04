type propsButtonSectionType = {
    title: string
    bg: string
}

export function ButtonSection ({title, bg}:propsButtonSectionType) {
    return(
        <>
            <button className={`
                w-[43.2rem] h-[7rem] text-white font-bold text-5xl py-4 px-2 rounded-3xl
                ${bg}
            `}>{title}</button>
        </>
    )
}