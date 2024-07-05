import { ReactNode } from "react"

type propsContainerTypes = {
    children:ReactNode
}

export function Container ({children}:propsContainerTypes) {
    return(
        <div className="flex flex-col items-center justify-center w-auto h-auto px-10">
            {children}
        </div>
    )
}