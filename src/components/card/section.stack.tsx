import { CardVideo } from "../cardVideo/card.video";
import { CarouselVideos } from "../carousel/carousel";
import { ButtonSection } from "./button/button";

type propsCardVideosType = {
    arrImagens: string[],
    title: string,
    bgButton: string
}

export function SectionStack ({arrImagens, title, bgButton}:propsCardVideosType) {
    return(
        <>
            <div className="w-full h-auto py-16 flex flex-col gap-4">
                <div className="w-full h-auto py-8 px-4 flex flex-col gap-8 items-center justify-center">
                    <div className="w-full h-auto flex justify-start items-center">
                        <ButtonSection title={title} bg={bgButton} />
                    </div>
                    <CarouselVideos>
                        {arrImagens.map((img:string, index:number)=>(
                            <CardVideo img={img} key={index}/>
                        ))}
                    </CarouselVideos>
                </div>
            </div>
        </>
    )
} 