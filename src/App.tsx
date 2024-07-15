import { Article } from "./components/article/article";
import { SectionStack } from "./components/card/section.stack";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { ModalCardEdit } from "./components/modal/modalcardedit";
import { imagesBack, imagesFront, imagesMobile } from "./utils/imagens";


export function App() {
  return (
    <>
      <div className="w-full min-h-screen bg-darkgray">
        <Header callPrps="/"/>
        <Article />
        <Container>
          <SectionStack arrImagens={imagesFront} title={"Front End"} bgButton={"bg-frontend"} />
          <SectionStack arrImagens={imagesBack} title={"Back End"} bgButton={"bg-backend"} />
          <SectionStack arrImagens={imagesMobile} title={"Mobile"} bgButton={"bg-inovgestao"} />
        </Container>
        <Footer />

        <ModalCardEdit />
      </div>
    </>
  )
}


