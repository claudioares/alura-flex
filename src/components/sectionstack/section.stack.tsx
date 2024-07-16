import { CardVideo } from "../cardVideo/card.video";
import { ContainerCarousel } from "../containercarousel/container.carousel";
import { ButtonSection } from "./button/button";

interface IDataBase {
    id: string,
    link_imagem: string,
    link_video: string,
    titulo: string,
    categorie: string,
    description: string
  }

type propsCardVideosType = {
    imageData: IDataBase[],
    title: string,
    bgButton: string,
}

export function SectionStack ({imageData, title, bgButton}:propsCardVideosType) {
    return(
        <>
            <div className="w-full h-auto py-16 flex flex-col gap-4">
                <div className="w-full h-auto py-8 px-4 flex flex-col gap-8 items-center justify-center">
                    <div className="w-full h-auto flex justify-start items-center">
                        <ButtonSection title={title} bg={bgButton} />
                    </div>
                    <ContainerCarousel>
                        {imageData.map((data, index:number)=>(
                            <CardVideo img={data.link_imagem} key={index} data={data}/>
                        ))}
                    </ContainerCarousel>
                </div>
            </div>
        </>
    )
} 