import { Article } from "./components/article/article";
import { ButtonSection } from "./components/card/button/button";
import { Card } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { imagesBack, imagesFront, imagesMobile } from "./utils/imagens";


export function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Header />
        <Article />

        <div className="w-full h-auto py-8 px-4 bg-darkgray flex flex-col gap-8 items-center justify-center">
          <div className="w-full h-auto flex justify-start items-center px-28">
            <ButtonSection title={"Front end"} bg={"bg-frontend"} />
          </div>
          <div className="flex gap-8 items-center justify-center">
            {imagesFront.map((img, index)=>(
              <Card img={img} key={index}/>
            ))}
          </div>
        </div>

        <div className="w-full h-auto py-8 px-4 bg-darkgray flex flex-col gap-8 items-center justify-center">
          <div className="w-full h-auto flex justify-start items-center px-28">
            <ButtonSection title={"Back end"} bg={"bg-backend"} />
          </div>
          <div className="flex gap-8 items-center justify-center">
            {imagesBack.map((img, index)=>(
              <Card img={img} key={index}/>
            ))}
          </div>
        </div>

        
        <div className="w-full h-auto py-8 px-4 bg-darkgray flex flex-col gap-8 items-center justify-center">
          <div className="w-full h-auto flex justify-start items-center px-28">
            <ButtonSection title={"Mobile"} bg={"bg-inovgestao"} />
          </div>
          <div className="flex gap-8 items-center justify-center">
            {imagesMobile.map((img, index)=>(
              <Card img={img} key={index}/>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}


