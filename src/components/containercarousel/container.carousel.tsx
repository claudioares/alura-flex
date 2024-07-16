import { ReactNode, Children } from "react"

type propsCarouselVideoType = {
    children: ReactNode
}

export function ContainerCarousel ({ children }:propsCarouselVideoType) {


    return (
        <>
            <div className="w-full object-cover overflow-y-hidden overflow-x-auto relative">
                <div 
                    className="flex gap-10 transition-transform duration-300" 
                >
                    {Children.map(children, (child:ReactNode, index:number)=>(
                        <div className="w-auto flex-shrink-0" key={index}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}